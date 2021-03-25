import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../UI/Button/Button";
import LabelField from "../UI/LabelField/LabelField";
import { TrashItem, TrashHeader, TrashActions } from "./styles";

const Trash = () => {
  const [trashTasks, setTrashTasks] = useState([]);
  const tasks = useSelector((state) => state.task.tasks);

  useEffect(() => {
    setTrashTasks(tasks.filter((task) => task.trashStatus === true));
  }, [tasks]);
  return (
    <>
      {trashTasks &&
        trashTasks.length > 0 &&
        trashTasks.map((trashTask) => (
          <TrashItem>
            <TrashHeader>{trashTask.title}</TrashHeader>
            <TrashActions>
              <Button>Make New Task</Button>
              <Button>Make Routine</Button>
              <Button>Delete Task</Button>
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
