import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initTask } from "../../../store/actions/appActions";
import LabelField from "../../UI/LabelField/LabelField";
import Loader from "../../UI/Loader/Loader";
import TaskItem from "../TaskItem/TaskItem";
import { getTaskRequest } from "../../../store/actions/taskActions";

const TaskList = () => {
  const sidebarInit = useSelector((state) => state.uiBehavior.sidebarInit);
  const taskInitialize = useSelector(
    (state) => state.uiBehavior.sidebarTaskInitialize
  );
  const tasks = useSelector((state) => state.task.tasks);
  const loading = useSelector((state) => state.task.loading);
  const error = useSelector((state) => state.task.error);
  const dispatch = useDispatch();

  useEffect(() => sidebarInit && !taskInitialize && dispatch(initTask()), [
    dispatch,
    sidebarInit,
    taskInitialize,
  ]);
  
  return (
    <>
      {loading && <Loader />}
      {taskInitialize && !tasks && !loading && error && (
        <LabelField padding size="small">
          error
        </LabelField>
      )}
      {tasks.length > 0 &&
        tasks.map((task) => <TaskItem key={task.title} task={task} />)}

      {taskInitialize && !loading && tasks.length === 0 && (
        <LabelField padding size="small">
          There is no task item in here...
        </LabelField>
      )}
    </>
  );
};

export default TaskList;
