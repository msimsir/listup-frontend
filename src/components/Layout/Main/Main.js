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

import { setDetailsAddTask } from "../../../store/actions/uiBehaviorActions";
import { setSelectedTask } from "../../../store/actions/appActions";
import TaskList from "../../Task/TaskList/TaskList";
import Modal from "../../UI/Modal/Modal";

const Main = () => {
  const [addTaskActive, setAddTaskActive] = useState(false);
  const dispatch = useDispatch();
  const mainTitle = useSelector((state) => state.uiBehavior.mainHeaderTitle);

  const detailsAddTask = useSelector(
    (state) => state.uiBehavior.detailsAddTask
  );
  useEffect(() => {
    //dispatch(getTask());
  }, [dispatch]);

  return (
    <>
      <Modal />
      <MainContainer>
        <MainHeader>
          <span>{mainTitle}</span>
          <IconWrapper>
            <IoAddCircleOutline
              onClick={() => {
                !detailsAddTask && dispatch(setDetailsAddTask(true));
                !detailsAddTask && dispatch(setSelectedTask(null));
              }}
            />
            <IoTriangleOutline />
            <IoTriangleOutline />
          </IconWrapper>
        </MainHeader>
        <MainContentSearchWrapper>
          <Search />
        </MainContentSearchWrapper>
        <MainContent>
          <TaskList />
        </MainContent>
      </MainContainer>
    </>
  );
};

export default Main;
