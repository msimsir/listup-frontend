import React, { useState, useEffect } from "react";
import Button from "../../UI/Button/Button";
import InputField from "../../UI/InputField/InputField";
import LabelField from "../../UI/LabelField/LabelField";
import ListField from "../../UI/ListField/ListField";
import TextField from "../../UI/TextField/TextField";
import {
  TaskFormWrapper,
  FormItem,
  FormDate,
  FormList,
  FormRow,
  Divider,
} from "./styles";
import { timeTags } from "../../../constants/ui-elements";
const initialTask = {
  title: "",
  description: "",
  createdDate: "",
  timeTag: "",
  status: false,
  subtasks: [],
  listId: "",
  tags: [],
  endDate: "",
  trashStatus: false,
};
const TaskForm = () => {
  const [taskData, setTaskData] = useState(initialTask);

  return (
    <TaskFormWrapper>
      <FormItem>
        <LabelField>Title</LabelField>
        <InputField
          onChange={(e) => setTaskData({ ...taskData, title: e.target.value })}
        />
      </FormItem>
      <FormItem>
        <LabelField>Description</LabelField>
        <TextField
          rows="2"
          onChange={(e) =>
            setTaskData({ ...taskData, description: e.target.value })
          }
        />
      </FormItem>
      <FormRow>
        <FormItem>
          <LabelField>Time to Do</LabelField>
          <ListField data={timeTags} />
        </FormItem>
        <FormItem>
          <LabelField>End Date</LabelField>
        </FormItem>
      </FormRow>

      <FormItem>
        <LabelField>Where to List</LabelField>
      </FormItem>
      <FormItem>
        <LabelField>Tags</LabelField>
      </FormItem>
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
        <Button size="large">Cancel</Button>
      </FormRow>
    </TaskFormWrapper>
  );
};

export default TaskForm;
