import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { initTask } from "../../../store/actions/appActions";
import LabelField from "../../UI/LabelField/LabelField";
import Loader from "../../UI/Loader/Loader";
import TaskItem from "../TaskItem/TaskItem";
import { getTaskRequest } from "../../../store/actions/taskActions";
import { sidebarMenuItems } from "../../../constants/ui-elements";

const TaskList = () => {
  const [filteredTask, setFilteredTask] = useState([]);
  //const [nonTrashTask, setNonTrashTask] = useState([]);
  const sidebarInit = useSelector((state) => state.uiBehavior.sidebarInit);
  const taskInitialize = useSelector(
    (state) => state.uiBehavior.sidebarTaskInitialize
  );
  const selectedSidebarMenu = useSelector(
    (state) => state.uiBehavior.selectedSidebarMenu
  );
  const tasks = useSelector((state) => state.task.tasks);
  const loading = useSelector((state) => state.task.loading);
  const error = useSelector((state) => state.task.error);
  const dispatch = useDispatch();

  const handleFilterTask = (option) => {
    switch (option) {
      case sidebarMenuItems[0]:
        return setFilteredTask(
          tasks.filter(
            (t) =>
              t.timeTag === sidebarMenuItems[0] &&
              t.trashStatus !== true &&
              t.status === false
          )
        );

      case sidebarMenuItems[1]:
        return setFilteredTask(
          tasks.filter(
            (t) =>
              t.timeTag === sidebarMenuItems[1] &&
              t.trashStatus !== true &&
              t.status === false
          )
        );

      case sidebarMenuItems[2]:
        return setFilteredTask(
          tasks.filter(
            (t) =>
              t.timeTag !== null && t.trashStatus !== true && t.status === false
          )
        );

      case sidebarMenuItems[5]:
        return setFilteredTask(
          tasks.filter((t) => t.status === true && t.trashStatus !== true)
        );

      case sidebarMenuItems[6]:
        return setFilteredTask(
          tasks.filter((t) => t.status === false && t.trashStatus !== true)
        );
    }
  };

  useEffect(() => sidebarInit && !taskInitialize && dispatch(initTask()), [
    dispatch,
    sidebarInit,
    taskInitialize,
  ]);

  useEffect(() => {
    sidebarInit &&
      setFilteredTask(
        tasks.filter(
          (t) => t.timeTag === sidebarMenuItems[0] && t.trashStatus !== true
        )
      );
  }, [tasks, sidebarInit]);

  useEffect(() => {
    handleFilterTask(selectedSidebarMenu);
  }, [tasks, selectedSidebarMenu]);

  return (
    <>
      {loading && <Loader />}
      {!loading && error && (
        <LabelField padding size="small">
          error
        </LabelField>
      )}
      {filteredTask.length > 0 &&
        filteredTask.map((task) => <TaskItem key={task._id} task={task} />)}

      {!error && taskInitialize && !loading && filteredTask.length === 0 && (
        <LabelField padding size="small">
          There is no task item in here...
        </LabelField>
      )}
    </>
  );
};

export default TaskList;
