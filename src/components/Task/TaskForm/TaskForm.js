import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  IoCloseOutline,
  IoPricetagOutline,
  IoRocketOutline,
} from "react-icons/io5";
import { v4 as uuid } from "uuid";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import LabelField from "../../UI/LabelField/LabelField";
import ListField from "../../UI/ListField/ListField";
import TextField from "../../UI/TextField/TextField";
import DateField from "../../UI/DateField/DateField";
import IconButton from "../../UI/IconButton/IconButton";
import Paper from "../../UI/Paper/Paper";
import Popup from "../../UI/Popup/Popup";
import Dropdown from "../../UI/Dropdown/Dropdown";

import {
  TaskFormWrapper,
  FormItem,
  FormRow,
  Divider,
  FormRowLeft,
  FormRowItemGroup,
} from "./styles";
import { timeTags } from "../../../constants/ui-elements";
import formatDate from "../../../utils/formatDate";

import { initList } from "../../../store/actions/appActions";
import { initTag } from "../../../store/actions/appActions";
import {
  setDetailsAddTask,
  setDetailsEditTask,
  setModal,
} from "../../../store/actions/uiBehaviorActions";

import {
  setOnAddingTask,
  setOnEditingTask,
} from "../../../store/actions/appActions";

import incrementDate from "../../../utils/incrementDate";
import {
  createTaskRequest,
  updateTaskRequest,
} from "../../../store/actions/taskActions";

const initialTask = {
  _id: "",
  title: "",
  createdDate: formatDate(new Date()),
  timeTag: "Today",
  status: false,
  subtasks: [],
  list: null,
  tags: [],
  endDate: formatDate(incrementDate(new Date(), 1)),
  trashStatus: false,
};

const initialSubTask = {
  _id: "",
  title: "",
  status: false,
};

const TaskForm = () => {
  const [taskData, setTaskData] = useState(initialTask);
  const [subTaskData, setSubTaskData] = useState(initialSubTask);
  const [datePicker, setDatePicker] = useState(false);
  const [showTagList, setShowTagList] = useState(false);
  const [showTagPopup, setShowTagPopup] = useState(false);
  const [selectedTags, setSelectedTags] = useState([]);
  const [titleValidation, setTitleValidation] = useState(false);
  const [selectedListItem, setSelectedListItem] = useState("");
  const dispatch = useDispatch();
  const lists = useSelector((state) => state.list.lists);
  const tags = useSelector((state) => state.tag.tags);
  const sidebarInit = useSelector((state) => state.uiBehavior.sidebarInit);
  const tagInitialize = useSelector(
    (state) => state.uiBehavior.sidebarTagInitialize
  );
  const listInitialize = useSelector(
    (state) => state.uiBehavior.sidebarListInitialize
  );

  const onAddingTask = useSelector((state) => state.app.onAddingTask);
  const onEditingTask = useSelector((state) => state.app.onEditingTask);
  const selectedTask = useSelector((state) => state.app.selectedTask);
  const editTaskState = useSelector(
    (state) => state.uiBehavior.detailsEditTask
  );

  const handleCalendar = (date) => {
    date === timeTags[2] ? setDatePicker(true) : setDatePicker(false);
  };

  const handleEndDate = (date) => {
    if (date === timeTags[1]) {
      setTaskData({
        ...taskData,
        timeTag: timeTags[1],
        endDate: formatDate(incrementDate(new Date(), 2)),
      });
    } else if (date === timeTags[0]) {
      setTaskData({
        ...taskData,
        timeTag: timeTags[0],
        endDate: formatDate(incrementDate(new Date(), 1)),
      });
    } else {
      setTaskData({ ...taskData, timeTag: timeTags[2] });
    }
  };

  const handleAddTag = (tag) => {
    if (taskData.tags.includes(tag._id)) {
      setShowTagPopup(true);
    } else {
      setSelectedTags([...selectedTags, tag]);
      setTaskData({
        ...taskData,
        tags: [...taskData.tags, tag._id],
      });
      setShowTagPopup(false);
    }
  };

  const handleSelectedList = (item) => {
    if (item !== null) {
      const { title } = lists.find((list) => list._id === item);
      setSelectedListItem(title);
    } else {
      setSelectedListItem("Select a list");
    }
  };

  const handleSelectedTags = (item) => {
    if (item.tags.length > 0) {
      tags.map((tag) =>
        item.tags.map(
          (item) =>
            item === tag._id &&
            setSelectedTags((prevState) => [...prevState, tag])
        )
      );
    }
  };

  const taskValidate = (title) => {
    if (title === "") {
      setTitleValidation(true);
    } else {
      setTitleValidation(false);
    }
  };

  const addTask = () => {
    if (taskData.title !== "") {
      if (taskData._id === "") {
        dispatch(createTaskRequest(taskData));
        dispatch(setDetailsAddTask(false));
        dispatch(setOnAddingTask(false));
        dispatch(setModal(false, null));
      } else {
        dispatch(updateTaskRequest(taskData._id, taskData));
        dispatch(setDetailsEditTask(false));
        dispatch(setOnEditingTask(false));
        dispatch(setModal(false, null));
      }
    } else {
      setTitleValidation(true);
    }
  };

  useEffect(() => sidebarInit && !tagInitialize && dispatch(initTag()), [
    dispatch,
    sidebarInit,
    tagInitialize,
  ]);

  useEffect(() => sidebarInit && !listInitialize && dispatch(initList()), [
    dispatch,
    sidebarInit,
    listInitialize,
  ]);

  useEffect(() => {
    if (selectedTask) {
      setTaskData({ ...selectedTask });
      handleSelectedList(selectedTask.list);
      handleSelectedTags(selectedTask);
    } else {
      setTaskData({ ...initialTask });
      setSelectedTags([]);
      setSelectedListItem("");
    }
  }, [selectedTask]);

  return (
    <TaskFormWrapper
      onChange={() => {
        !selectedTask && !onAddingTask && dispatch(setOnAddingTask(true));
        !selectedTask &&
          !onAddingTask &&
          dispatch(setModal(false, [setOnAddingTask(false)], "proceed"));

        selectedTask && !onEditingTask && dispatch(setOnEditingTask(true));
        selectedTask &&
          !onEditingTask &&
          dispatch(setModal(false, [setOnEditingTask(false)], "proceed"));
      }}
    >
      <FormItem>
        <LabelField>Title</LabelField>
        <TextField
          validation={titleValidation}
          rows="2"
          value={taskData.title}
          onChange={(e) => {
            taskValidate(e.target.value);
            setTaskData({ ...taskData, title: e.target.value });
          }}
        />
        {titleValidation && (
          <LabelField validation={titleValidation}>
            This field can not be empty
          </LabelField>
        )}
      </FormItem>
      <FormRow>
        <FormItem>
          <>
            <LabelField>Time to Do</LabelField>
            <ListField
              value={taskData.timeTag}
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
          </>
        </FormItem>

        <FormItem>
          <LabelField>End Date</LabelField>
          <DateField
            disabled={datePicker ? false : true}
            value={formatDate(taskData.endDate)}
            min={formatDate(incrementDate(new Date(), 3)).toString()}
            onChange={(e) => {
              e.preventDefault();
              setTaskData({ ...taskData, endDate: formatDate(e.target.value) });
            }}
          />
        </FormItem>
      </FormRow>

      {lists && lists.length > 0 && (
        <FormItem>
          <LabelField>Where to List</LabelField>
          <ListField
            value={
              selectedTask
                ? selectedListItem
                : selectedListItem
                ? selectedListItem
                : "Select a list"
            }
            multiple={false}
            onChange={(e) => {
              e.preventDefault();
              handleSelectedList(
                e.target.options.selectedIndex === 0
                  ? null
                  : e.target.options[
                      e.target.options.selectedIndex
                    ].getAttribute("data-key")
              );
              setTaskData({
                ...taskData,
                list:
                  e.target.options.selectedIndex === 0
                    ? null
                    : e.target.options[
                        e.target.options.selectedIndex
                      ].getAttribute("data-key"),
              });
            }}
          >
            <option key="title" data-key="Select a list" value="Select a list">
              Select a list
            </option>
            {lists.map((list) => (
              <option key={list.title} data-key={list._id} value={list.title}>
                {list.title}
              </option>
            ))}
          </ListField>
        </FormItem>
      )}

      <FormItem onClick={() => setShowTagList(false)}>
        <LabelField>Tags to Select</LabelField>
      </FormItem>
      <FormRow>
        {showTagPopup && (
          <Popup
            text="Each element can be only selected once."
            onClose={setShowTagPopup}
          />
        )}
        {tags && (
          <IconButton onClick={() => setShowTagList(!showTagList)}>
            <IoPricetagOutline />
          </IconButton>
        )}
        {tags && (
          <Paper>
            {selectedTags &&
              selectedTags.length > 0 &&
              selectedTags.map((tag) => (
                <div key={tag._id} data-key={tag._id} value={tag.title}>
                  {tag.title}
                  <IoCloseOutline
                    value={tag.title}
                    data-key={tag._id}
                    onClick={(e) => {
                      e.preventDefault();
                      setSelectedTags(
                        selectedTags.filter(
                          (item) =>
                            item.title !== e.target.getAttribute("value")
                        )
                      );
                      setTaskData({
                        ...taskData,
                        tags: taskData.tags.filter(
                          (item) => item !== e.target.getAttribute("data-key")
                        ),
                      });
                    }}
                  />
                </div>
              ))}
          </Paper>
        )}
        {showTagList && <Dropdown data={tags} onSelect={handleAddTag} />}
      </FormRow>

      <Divider />
      <FormItem>
        <LabelField>Sub Tasks</LabelField>
      </FormItem>
      {taskData.subtasks &&
        taskData.subtasks.length > 0 &&
        taskData.subtasks.map((task, index) => (
          <FormRowLeft key={index}>
            <FormRowItemGroup>
              <IoRocketOutline />
              <LabelField>{task.title}</LabelField>
            </FormRowItemGroup>
            <IoCloseOutline
              onClick={() => {
                setTaskData({
                  ...taskData,
                  subtasks: taskData.subtasks.filter(
                    (subtask) => subtask._id !== task._id
                  ),
                });
              }}
            />
          </FormRowLeft>
        ))}

      <FormRow>
        <InputField
          value={subTaskData.title}
          onChange={(e) =>
            setSubTaskData({
              ...subTaskData,
              _id: uuid(),
              title: e.target.value,
              status: false,
            })
          }
        />
        <Button
          size="small"
          primary
          onClick={() => {
            setSubTaskData(initialSubTask);
            setTaskData({
              ...taskData,
              subtasks: [...taskData.subtasks, subTaskData],
            });
          }}
        >
          Add
        </Button>
      </FormRow>

      <FormRow>
        <Button size="large" primary onClick={() => addTask()}>
          {editTaskState ? <>Edit</> : <>Save</>}
        </Button>
        <Button
          size="large"
          onClick={() => {
            onAddingTask &&
              dispatch(
                setModal(
                  true,
                  [setDetailsAddTask(false), setOnAddingTask(false)],
                  "exit"
                )
              );
            !selectedTask &&
              !onAddingTask &&
              dispatch(setDetailsAddTask(false));

            selectedTask &&
              onEditingTask &&
              dispatch(
                setModal(
                  true,
                  [setDetailsEditTask(false), setOnEditingTask(false)],
                  "exit"
                )
              );
            selectedTask &&
              !onEditingTask &&
              dispatch(setDetailsEditTask(false));
          }}
        >
          Cancel
        </Button>
      </FormRow>
    </TaskFormWrapper>
  );
};

export default TaskForm;
