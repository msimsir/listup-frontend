import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskForm from "../../Task/TaskForm/TaskForm";
import {
  DetailsContainer,
  DetailsHeader,
  DetailsSectionOne,
  DetailsSectionTwo,
} from "./styles";

const Details = () => {
  const dispatch = useDispatch();
  const viewTaskState = useSelector(
    (state) => state.uiBehavior.detailsViewTask
  );
  const addTaskState = useSelector((state) => state.uiBehavior.detailsAddTask);
  const editTaskState = useSelector(
    (state) => state.uiBehavior.detailsEditTask
  );
  return (
    <DetailsContainer>
      <DetailsHeader></DetailsHeader>
      <DetailsSectionOne>{addTaskState && <TaskForm />}</DetailsSectionOne>
      <DetailsSectionTwo></DetailsSectionTwo>
    </DetailsContainer>
  );
};

export default Details;
