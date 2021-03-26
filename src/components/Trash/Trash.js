import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  IoRocketOutline,
  IoTrashOutline,
  IoBicycleOutline,
  IoClipboardOutline,
} from "react-icons/io5";
import IconButton from "../UI/IconButton/IconButton";
import LabelField from "../UI/LabelField/LabelField";
import Loader from "../UI/Loader/Loader";
import { TrashItem, TrashHeader, TrashActions } from "./styles";
import { deleteTaskRequest } from "../../store/actions/taskActions";
import {
  setMakeNewTask,
  setModal,
} from "../../store/actions/uiBehaviorActions";
import { setSelectedTask } from "../../store/actions/appActions";

const Trash = () => {
  const [trashTasks, setTrashTasks] = useState([]);
  const tasks = useSelector((state) => state.task.tasks);
  const loading = useSelector((state) => state.task.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    setTrashTasks(tasks.filter((task) => task.trashStatus === true));
  }, [tasks]);

  return (
    <>
      {loading && <Loader />}
      {trashTasks &&
        trashTasks.length > 0 &&
        trashTasks.map((trashTask) => (
          <TrashItem key={trashTask._id}>
            <TrashHeader>{trashTask.title}</TrashHeader>
            <TrashActions>
              <IconButton
                onClick={() => {
                  dispatch(setSelectedTask(trashTask));
                  dispatch(setMakeNewTask(true));
                }}
              >
                <IoClipboardOutline />
              </IconButton>
              <IconButton>
                <IoBicycleOutline />
              </IconButton>
              <IconButton
                onClick={() => {
                  dispatch(
                    setModal(true, [deleteTaskRequest(trashTask._id)], "delete")
                  );
                }}
              >
                <IoTrashOutline />
              </IconButton>
            </TrashActions>
          </TrashItem>
        ))}
      {trashTasks.length === 0 && (
        <LabelField padding size="small">
          There is no task item in here...
        </LabelField>
      )}
    </>
  );
};

export default Trash;
