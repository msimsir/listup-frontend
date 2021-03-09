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
import TaskItem from "../../Task/TaskItem/TaskItem";
import TaskList from "../../Task/TaskList/TaskList";

const Main = () => {
  const [addTaskActive, setAddTaskActive] = useState(false);
  const dispatch = useDispatch();
  const mainTitle = useSelector((state) => state.uiBehavior.mainHeaderTitle);

  useEffect(() => {
    //dispatch(getTask());
  }, [dispatch]);

 
  return (
    <MainContainer>
      <MainHeader>
        <span>{mainTitle}</span>
        <IconWrapper>
          <IoAddCircleOutline
            onClick={() => dispatch(setDetailsAddTask(true))}
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
  );
};

export default Main;
