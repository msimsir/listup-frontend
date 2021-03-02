import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoAddCircleOutline, IoTriangleOutline } from "react-icons/io5";

import { MainContainer, MainHeader, MainContent, IconWrapper } from "./styles";
import Search from "../../UI/Search/Search";
import { getTask } from "../../../store/actions/taskActions";

const Main = () => {
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
          <IoAddCircleOutline />
          <IoTriangleOutline />
          <IoTriangleOutline />
        </IconWrapper>
      </MainHeader>
      <MainContent>
        <Search />
      </MainContent>
    </MainContainer>
  );
};

export default Main;
