import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  IoCloseOutline,
  IoPricetagOutline,
  IoTimeSharp,
} from "react-icons/io5";
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

import { TaskFormWrapper, FormItem, FormRow, Divider } from "./styles";
import { timeTags } from "../../../constants/ui-elements";
import formatDate from "../../../utils/formatDate";

import { initList } from "../../../store/actions/appActions";
import { initTag } from "../../../store/actions/appActions";
import {
  setDetailsAddTask,
  setModal,
} from "../../../store/actions/uiBehaviorActions";

import {
  setOnAddingTask,
  setOnEditingTask,
} from "../../../store/actions/appActions";

import incrementDate from "../../../utils/incrementDate";
import { createTaskRequest } from "../../../store/actions/taskActions";

const initialTask = {
  id: "",
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

const TaskForm = () => {
  const [taskData, setTaskData] = useState(initialTask);
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
  const onEditingTask = useSelector((state) => state.app.onAddingTask);
  const selectedTask = useSelector((state) => state.app.selectedTask);
  const editTaskState = useSelector(
    (state) => state.uiBehavior.detailsEditTask
  );

  const handleCalendar = (date) => {
    date === "Next 7 Days" ? setDatePicker(true) : setDatePicker(false);
  };

  const handleEndDate = (date) => {
    if (date === "Tomorrow") {
      setTaskData({
        ...taskData,
        timeTag: "Tomorrow",
        endDate: formatDate(incrementDate(new Date(), 2)),
      });
    } else if (date === "Today") {
      setTaskData({
        ...taskData,
        timeTag: "Today",
        endDate: formatDate(incrementDate(new Date(), 1)),
      });
    } else {
      setTaskData({ ...taskData, timeTag: "Next 7 Days" });
    }
  };

  const handleTag = (tag) => {
    if (taskData.tags.includes(tag)) {
      setShowTagPopup(true);
    } else {
      setTaskData({
        ...taskData,
        tags: [...taskData.tags, tag],
      });
      setShowTagPopup(false);
    }
  };

  const handleSelectedList = (item) => {
    if (item.list !== null) {
      const { title } = lists.find((list) => list._id === item.list);
      setSelectedListItem(title);
    }
  };

  const handleSelectedTags = (item) => {
    console.log("******************************");
    console.log("handleSelectedTags");

    /*
      taskData.tags.forEach((e) =>
        tags.map(
          (tag) =>
            e === tag._id && setTaskData({ ...taskData, tags: [tag] })
        )
      );

      */

    //taskData.tags.forEach((e, i) => (taskData.tags[i] = ""));
    tags.map((tag) =>
      item.tags.map(
        (i) =>
          i === tag._id &&
          setTaskData({
            ...taskData,
            tags: [tag],
          })
      )
    );
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
      dispatch(createTaskRequest(taskData));
      dispatch(setDetailsAddTask(false));
      dispatch(setOnAddingTask(false));
      dispatch(setModal(false, null));
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
      if (selectedTask.tags.length > 0) {
        //taskData.tags.forEach((e, i) => (taskData.tags[i] = ""));
        handleSelectedList(selectedTask);
      }
      handleSelectedTags(selectedTask);
    } else {
      setTaskData({ ...initialTask });
    }
  }, [selectedTask]);

  console.log("selectedTask", selectedTask);
  console.log("taskData-tags", taskData.tags);
  console.log("taskData", taskData);
  return (
    <TaskFormWrapper
      onChange={() => {
        !onAddingTask && dispatch(setOnAddingTask(true));
        !onAddingTask &&
          dispatch(setModal(false, [setOnAddingTask(false)], "proceed"));
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
            value={selectedTask ? selectedListItem : { value: "Select a list" }}
            onChange={(e) => {
              e.preventDefault();
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
            <option key="title" data-key="title" value="Select a list">
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
            {taskData.tags &&
              taskData.tags.length > 0 &&
              taskData.tags.map((tag) => (
                <div key={tag._id} value={tag.title}>
                  {tag.title}
                  <IoCloseOutline
                    value={tag.title}
                    onClick={(e) => {
                      e.preventDefault();
                      setTaskData({
                        ...taskData,
                        tags: taskData.tags.filter(
                          (item) =>
                            item.title !== e.target.getAttribute("value")
                        ),
                      });
                    }}
                  />
                </div>
              ))}
          </Paper>
        )}
        {showTagList && <Dropdown data={tags} onSelect={handleTag} />}
      </FormRow>

      <Divider />
      <FormItem>
        <LabelField>Sub Tasks</LabelField>
      </FormItem>
      <FormRow>
        <InputField
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        />
        <Button size="small" primary>
          Add
        </Button>
      </FormRow>

      <FormRow>
        <Button size="large" primary onClick={() => addTask()}>
          {editTaskState ? <>Edit</> : <>Add</>}
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
            !onAddingTask && dispatch(setDetailsAddTask(false));
          }}
        >
          Cancel
        </Button>
      </FormRow>
    </TaskFormWrapper>
  );
};

export default TaskForm;
