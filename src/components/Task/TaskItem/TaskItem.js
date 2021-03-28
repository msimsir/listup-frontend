import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoSquareOutline, IoRocketOutline } from "react-icons/io5";
import moment from "moment";
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
import { sidebarMenuItems } from "../../../constants/ui-elements";
import Button from "../../UI/Button/Button";
import { updateTaskRequest } from "../../../store/actions/taskActions";

const TaskItem = ({ task }) => {
  const { _id, title, timeTag, subTasks, endDate } = task;
  const onAddingTask = useSelector((state) => state.app.onAddingTask);
  const onEditingTask = useSelector((state) => state.app.onEditingTask);
  const modalActions = useSelector((state) => state.uiBehavior.modalActions);
  const selectedSidebarMenu = useSelector(
    (state) => state.uiBehavior.selectedSidebarMenu
  );
  const dispatch = useDispatch();

  const checkProcessing = () => {
    if (onAddingTask || onEditingTask) {
      dispatch(
        setModal(
          true,
          [...modalActions, setDetailsViewTask(true), setSelectedTask(task)],
          "proceed"
        )
      );
    } else {
      dispatch(setDetailsViewTask(true));
      dispatch(setSelectedTask(task));
    }
  };

  const handleTimeToLeft = (endDate, timeTag) => {
    const currentDate = moment();
    const endDateModified = moment(endDate);
    const duration = moment.duration(endDateModified.diff(currentDate));
    const days = duration.days();
    console.log("days", days);

    if (days === 0 || days === 1) {
      return timeTag;
    } else if (days < 0) {
      return "Undone";
    } else if (days > 1) {
      return `${days} days to left`;
    } else {
      return timeTag;
    }
  };

  return (
    <CardWrapper>
      <CardHeader>
        <CardTitle onClick={() => checkProcessing()}>
          <IoSquareOutline /> <span>{title}</span>
        </CardTitle>
        <CardNotification>
          {((selectedSidebarMenu === sidebarMenuItems[0] ||
            selectedSidebarMenu === sidebarMenuItems[1] ||
            selectedSidebarMenu === sidebarMenuItems[2]) &&
            timeTag) ||
            (selectedSidebarMenu === sidebarMenuItems[5] && "Done") ||
            (selectedSidebarMenu === sidebarMenuItems[6] &&
              handleTimeToLeft(endDate, timeTag))}
        </CardNotification>
      </CardHeader>
      <CardContent>
        {/** Controlling subtask if it exists, includes just first element in this card */}
        <CardElementGroup>
          {subTasks && subTasks.length > 0 && (
            <>
              <IoRocketOutline />
              <CardElement>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </CardElement>
            </>
          )}
        </CardElementGroup>
        <CardElementGroup>
          {(selectedSidebarMenu === sidebarMenuItems[5] ||
            selectedSidebarMenu === sidebarMenuItems[6]) && (
            <Button
              size="large"
              onClick={() =>
                dispatch(updateTaskRequest(_id, { ...task, trashStatus: true }))
              }
            >
              Move To Trash
            </Button>
          )}
          {(selectedSidebarMenu === sidebarMenuItems[0] ||
            selectedSidebarMenu === sidebarMenuItems[1] ||
            selectedSidebarMenu === sidebarMenuItems[2]) && (
            <CardElement>40%</CardElement>
          )}
        </CardElementGroup>
      </CardContent>
    </CardWrapper>
  );
};

export default TaskItem;
