import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoAddCircleOutline, IoTriangleOutline } from "react-icons/io5";
import {
  MainContainer,
  MainHeader,
  MainContent,
  IconWrapper,
  MainContentSearchWrapper,
} from "./styles";
import Search from "../../UI/Search/Search";

import {
  setDetailsAddTask,
  setModal,
} from "../../../store/actions/uiBehaviorActions";
import { setSelectedTask } from "../../../store/actions/appActions";
import TaskList from "../../Task/TaskList/TaskList";
import Modal from "../../UI/Modal/Modal";
import Popup from "../../UI/Popup/Popup";
import Settings from "../../Settings/Settings";
import Trash from "../../Trash/Trash";
import MakeNewTask from "../../Task/MakeNewTask/MakeNewTask";
import { sidebarMenuItems } from "../../../constants/ui-elements";

const Main = () => {
  const dispatch = useDispatch();
  const [showAddTaskPopup, setShowAddTaskPopup] = useState(false);
  const mainTitle = useSelector((state) => state.uiBehavior.mainHeaderTitle);
  const detailsAddTask = useSelector(
    (state) => state.uiBehavior.detailsAddTask
  );
  const modalActions = useSelector((state) => state.uiBehavior.modalActions);
  const selectedSidebarMenu = useSelector(
    (state) => state.uiBehavior.selectedSidebarMenu
  );
  const makeNewTask = useSelector((state) => state.uiBehavior.makeNewTask);
  const onAddingTask = useSelector((state) => state.app.onAddingTask);
  const onEditingTask = useSelector((state) => state.app.onEditingTask);

  const checkProcessing = () => {
    if (onAddingTask) {
      if (!detailsAddTask) {
        dispatch(
          setModal(true, [...modalActions, setDetailsAddTask(true)], "proceed")
        );
        setShowAddTaskPopup(false);
      } else {
        setShowAddTaskPopup(true);
      }
    } else if (onEditingTask) {
      dispatch(
        setModal(
          true,
          [...modalActions, setDetailsAddTask(true), setSelectedTask(null)],
          "proceed"
        )
      );
    } else {
      dispatch(setDetailsAddTask(true));
      dispatch(setSelectedTask(null));
    }
  };

  return (
    <>
      <Modal />
      {makeNewTask && <MakeNewTask />}
      <MainContainer>
        <MainHeader>
          <span>{mainTitle}</span>

          {selectedSidebarMenu !== "Settings" && (
            <IconWrapper>
              {showAddTaskPopup && (
                <Popup
                  text="Adding a task is currently in progress."
                  onClose={setShowAddTaskPopup}
                />
              )}
              <IoAddCircleOutline
                onClick={() => {
                  checkProcessing();
                }}
              />

              <IoTriangleOutline />
              <IoTriangleOutline />
            </IconWrapper>
          )}
        </MainHeader>
        <MainContentSearchWrapper>
          <Search />
        </MainContentSearchWrapper>
        <MainContent>
          {(selectedSidebarMenu === sidebarMenuItems[0] ||
            selectedSidebarMenu === sidebarMenuItems[1] ||
            selectedSidebarMenu === sidebarMenuItems[2] ||
            selectedSidebarMenu === sidebarMenuItems[5] ||
            selectedSidebarMenu === sidebarMenuItems[6]) && <TaskList />}
          {selectedSidebarMenu === sidebarMenuItems[7] && <Settings />}
          {selectedSidebarMenu === sidebarMenuItems[3] && <Trash />}
        </MainContent>
      </MainContainer>
    </>
  );
};

export default Main;
