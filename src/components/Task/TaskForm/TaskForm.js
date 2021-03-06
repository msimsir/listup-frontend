import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoCloseOutline, IoPricetagOutline } from "react-icons/io5";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import LabelField from "../../UI/LabelField/LabelField";
import ListField from "../../UI/ListField/ListField";
import TextField from "../../UI/TextField/TextField";
import DateField from "../../UI/DateField/DateField";
import IconButton from "../../UI/IconButton/IconButton";
import Paper from "../../UI/Paper/Paper";
import Dropdown from "../../UI/Dropdown/Dropdown";

import { TaskFormWrapper, FormItem, FormRow, Divider } from "./styles";
import { timeTags } from "../../../constants/ui-elements";
import formatDate from "../../../utils/formatDate";

import { initList } from "../../../store/actions/appActions";
import { initTag } from "../../../store/actions/appActions";
import { setDetailsAddTask } from "../../../store/actions/uiBehaviorActions";

const initialTask = {
  title: "",
  createdDate: formatDate(new Date()),
  timeTag: "",
  status: false,
  subtasks: [],
  list: null,
  tags: [],
  endDate: "",
  trashStatus: false,
};

const TaskForm = () => {
  const [taskData, setTaskData] = useState(initialTask);
  const [datePicker, setDatePicker] = useState(false);
  const [selectedTag, setSelectedTag] = useState(null);
  const [tagList, setTagList] = useState(false);
  const lists = useSelector((state) => state.list.lists);
  const tags = useSelector((state) => state.tag.tags);
  const dispatch = useDispatch();
  const sidebarInit = useSelector((state) => state.uiBehavior.sidebarInit);
  const tagInitialize = useSelector(
    (state) => state.uiBehavior.sidebarTagInitialize
  );
  const listInitialize = useSelector(
    (state) => state.uiBehavior.sidebarListInitialize
  );

  const handleCalendar = (date) => {
    date === "Next 7 Days" ? setDatePicker(true) : setDatePicker(false);
  };

  const handleTag = (tag) => {
    setTaskData({
      ...taskData,
      tags: [...taskData.tags, tag],
    });
  };

  console.log("tags", taskData.tags);

  useEffect(() => sidebarInit && !tagInitialize && dispatch(initTag()), [
    dispatch,
  ]);

  useEffect(() => sidebarInit && !listInitialize && dispatch(initList()), [
    dispatch,
  ]);

  return (
    <TaskFormWrapper>
      <FormItem>
        <LabelField>Title</LabelField>
        <TextField
          rows="2"
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        />
      </FormItem>
      <FormRow>
        <FormItem>
          <>
            <LabelField>Time to Do</LabelField>
            <ListField
              onChange={(e) => {
                setTaskData({ ...taskData, timeTag: e.target.value });
                handleCalendar(e.target.value);
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
            onChange={(e) => console.log(formatDate(new Date(e.target.value)))}
          />
        </FormItem>
      </FormRow>

      {lists && lists.length > 0 && (
        <FormItem>
          <LabelField>Where to List</LabelField>
          <ListField>
            {lists.map((list) => (
              <option key={list.title} value={list.title}>
                {list.title}
              </option>
            ))}
          </ListField>
        </FormItem>
      )}

      <FormItem onClick={() => setTagList(false)}>
        <LabelField>Tags to Select</LabelField>
      </FormItem>
      <FormRow>
        {tags && (
          <IconButton onClick={() => setTagList(!tagList)}>
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
        {tagList && <Dropdown data={tags} onSelect={handleTag} />}
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
        <Button size="large" primary>
          Add
        </Button>
        <Button size="large" onClick={() => dispatch(setDetailsAddTask(false))}>
          Cancel
        </Button>
      </FormRow>
    </TaskFormWrapper>
  );
};

export default TaskForm;
