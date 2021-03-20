import React from "react";
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
  const onAddingTask = useSelector((state) => state.uiBehavior.onAddingTask);
  const modalActions = useSelector((state) => state.uiBehavior.modalActions);
  const modalActionName = useSelector(
    (state) => state.uiBehavior.modalActionName
  );

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
