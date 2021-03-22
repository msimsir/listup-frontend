import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoSquareOutline, IoRocketOutline } from "react-icons/io5";
import {
  CardWrapper,
  CardHeader,
  CardTitle,
  CardNotification,
  CardContent,
  CardElementGroup,
  CardElement,
} from "./styles";
import {
  setDetailsViewTask,
  setModal,
} from "../../../store/actions/uiBehaviorActions";
import { setSelectedTask } from "../../../store/actions/appActions";

const TaskItem = ({ task }) => {
  const { title, timeTag, subTasks } = task;
  const onAddingTask = useSelector((state) => state.app.onAddingTask);
  const onEditingTask = useSelector((state) => state.app.onEditingTask);
  const modalActions = useSelector((state) => state.uiBehavior.modalActions);
  const tags = useSelector((state) => state.tag.tags);
  const modalActionName = useSelector(
    (state) => state.uiBehavior.modalActionName
  );

  /*
  useEffect(() => {
    console.log("******************************");
    if (task.tags.length > 0) {
      console.log("task", task);
      task.tags.forEach((e, i) =>
        tags.map((tag) => e === tag._id && console.log("selected", tag))
      );
    }
  }, []);

  */

  const dispatch = useDispatch();
  return (
    <CardWrapper>
      <CardHeader>
        <CardTitle
          onClick={() => {
            onAddingTask &&
              dispatch(
                setModal(
                  true,
                  [
                    ...modalActions,
                    setDetailsViewTask(true),
                    setSelectedTask(task),
                  ],
                  modalActionName
                )
              );
            !onAddingTask && dispatch(setDetailsViewTask(true));
            !onAddingTask && dispatch(setSelectedTask(task));
          }}
        >
          <IoSquareOutline /> {title}
        </CardTitle>
        <CardNotification>{timeTag}</CardNotification>
      </CardHeader>
      <CardContent>
        {/** Controlling subtask if it exists, includes just first element in this card */}
        <CardElementGroup>
          {subTasks && subTasks.length > 0 && (
            <>
              <IoRocketOutline />
              <CardElement>search giant usage in fiction</CardElement>
            </>
          )}
        </CardElementGroup>
        <CardElementGroup>
          <CardElement>40%</CardElement>
        </CardElementGroup>
      </CardContent>
    </CardWrapper>
  );
};

export default TaskItem;
