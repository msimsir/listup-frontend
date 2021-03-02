import React from "react";
import TaskForm from "../../Task/TaskForm/TaskForm";
import {
  DetailsContainer,
  DetailsHeader,
  DetailsSectionOne,
  DetailsSectionTwo,
} from "./styles";

const Details = () => {
  return (
    <DetailsContainer>
      <DetailsHeader></DetailsHeader>
      <DetailsSectionOne>
        <TaskForm />
      </DetailsSectionOne>
      <DetailsSectionTwo></DetailsSectionTwo>
    </DetailsContainer>
  );
};

export default Details;
