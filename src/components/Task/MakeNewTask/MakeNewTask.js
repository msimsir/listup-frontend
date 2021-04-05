import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  IoCloseOutline,
  IoRocketOutline,
  IoSquareOutline,
  IoCheckmarkOutline,
} from "react-icons/io5";
import { setMakeNewTask } from "../../../store/actions/uiBehaviorActions";
import {
  Background,
  MakeNewTaskWrapper,
  MakeNewTaskHeader,
  MakeNewTaskItemGroup,
  MakeNewTaskElement,
  MakeNewTaskContent,
  MakeNewTaskActions,
} from "./styles";
import { timeTags } from "../../../constants/ui-elements";
import Button from "../../UI/Button/Button";
import formatDate from "../../../utils/formatDate";
import incrementDate from "../../../utils/incrementDate";
import ListField from "../../UI/ListField/ListField";
import DateField from "../../UI/DateField/DateField";
import { setSelectedTask } from "../../../store/actions/appActions";
import { updateTaskRequest } from "../../../store/actions/taskActions";

const MakeNewTask = () => {
  const [newTask, setNewTask] = useState("");
  const [datePicker, setDatePicker] = useState(false);
  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.app.selectedTask);
  const tags = useSelector((state) => state.tag.tags);
  const lists = useSelector((state) => state.list.lists);

  const handleSelectedTag = (selectedTag) => {
    const { title } = tags.find((t) => t._id === selectedTag);
    return title;
  };

  const handleSelectedList = (selectedList) => {
    const { title } = lists.find((l) => l._id === selectedList);
    return title;
  };

  const handleCalendar = (date) => {
    date === "Next 7 Days" ? setDatePicker(true) : setDatePicker(false);
  };

  const handleEndDate = (date) => {
    if (date === "Tomorrow") {
      setNewTask({
        ...newTask,
        timeTag: "Tomorrow",
        endDate: formatDate(incrementDate(new Date(), 2)),
      });
    } else if (date === "Today") {
      setNewTask({
        ...newTask,
        timeTag: "Today",
        endDate: formatDate(incrementDate(new Date(), 1)),
      });
    } else {
      setNewTask({ ...newTask, timeTag: "Next 7 Days" });
    }
  };

  useEffect(() => {
    setNewTask({
      ...selectedTask,
      trashStatus: false,
      status: false,
      createdDate: formatDate(new Date()),
      endDate: formatDate(incrementDate(new Date(), 1)),
      timeTag: "Today",
      subtasks: selectedTask.subtasks.map(
        (subtask) => ({ ...subtask, status: false })
      ),
    });
  }, [selectedTask]);

  return (
    <>
      <Background />
      <MakeNewTaskWrapper>
        <IoCloseOutline onClick={() => dispatch(setMakeNewTask(false))} />
        <MakeNewTaskHeader>Make New Task</MakeNewTaskHeader>
        <MakeNewTaskContent>
          <MakeNewTaskItemGroup>
            <IoSquareOutline />
            <MakeNewTaskElement>{newTask.title}</MakeNewTaskElement>
          </MakeNewTaskItemGroup>
          <MakeNewTaskItemGroup>
            <MakeNewTaskElement>
              <IoCheckmarkOutline />
              {newTask.subtasks && newTask.subtasks.length > 0 && (
                <>Sub Tasks: {newTask.subtasks.length} item</>
              )}
              {newTask.subtasks && newTask.subtasks.length === 0 && (
                <>No sub tasks</>
              )}
            </MakeNewTaskElement>
            <MakeNewTaskElement>
              <IoCheckmarkOutline />
              {newTask.list && (
                <>
                  Listed in <a>{handleSelectedList(newTask.list)}</a>
                </>
              )}
              {newTask.list === null && <>It is not inside any list</>}
            </MakeNewTaskElement>
          </MakeNewTaskItemGroup>
          <MakeNewTaskItemGroup>
            <MakeNewTaskElement>
              <IoCheckmarkOutline />
              {newTask.tags && newTask.tags.length === 0 && (
                <>There is no tags</>
              )}
              {newTask.tags &&
                newTask.tags.length > 0 &&
                newTask.tags.map((selectedTag) => (
                  <span key={selectedTag}>
                    #{handleSelectedTag(selectedTag)}
                  </span>
                ))}
            </MakeNewTaskElement>
          </MakeNewTaskItemGroup>
          <MakeNewTaskItemGroup>
            <MakeNewTaskElement>
              Start Date
              <ListField
                value={newTask.timeTag}
                onChange={(e) => {
                  e.preventDefault();
                  handleCalendar(e.target.value);
                  handleEndDate(e.target.value);
                }}
              >
                {timeTags.map((item) => (
                  <option key={item} value={item}>
                    {item}
                  </option>
                ))}
              </ListField>
            </MakeNewTaskElement>
            <MakeNewTaskElement>
              End Date
              <DateField
                disabled={datePicker ? false : true}
                value={formatDate(newTask.endDate)}
                min={formatDate(incrementDate(new Date(), 3)).toString()}
                onChange={(e) => {
                  e.preventDefault();
                  setNewTask({
                    ...newTask,
                    endDate: formatDate(e.target.value),
                  });
                }}
              />
            </MakeNewTaskElement>
          </MakeNewTaskItemGroup>
        </MakeNewTaskContent>

        <MakeNewTaskActions>
          <Button
            primary
            size="medium"
            onClick={() => {
              dispatch(updateTaskRequest(newTask._id, newTask));
              dispatch(setSelectedTask(null));
              dispatch(setMakeNewTask(false));
            }}
          >
            Make
          </Button>
          <Button size="medium" onClick={() => dispatch(setMakeNewTask(false))}>
            Cancel
          </Button>
        </MakeNewTaskActions>
      </MakeNewTaskWrapper>
    </>
  );
};

export default MakeNewTask;
