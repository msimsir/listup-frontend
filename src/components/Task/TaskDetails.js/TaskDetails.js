import React from "react";
import { IoRocketOutline, IoSquareOutline } from "react-icons/io5";
import LabelField from "../../UI/LabelField/LabelField";
import {
  TaskDetailsTitleSection,
  TaskDetailsTag,
  TaskDetailsWrapper,
  TaskDetailsTagSection,
  TaskDetailsElement,
  TaskDetailsElementGroup,
  Element,
} from "./styles";

const TaskDetails = ({ task }) => {
  const { title, timeTag, status, subTasks } = task;
  return (
    <TaskDetailsWrapper>
      <TaskDetailsTitleSection>
        <IoSquareOutline />
        <LabelField>{title}</LabelField>
      </TaskDetailsTitleSection>

      <TaskDetailsElementGroup>
        <IoRocketOutline />
        <TaskDetailsElement>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit.
        </TaskDetailsElement>
      </TaskDetailsElementGroup>
      <TaskDetailsElementGroup>
        <IoRocketOutline />
        <TaskDetailsElement>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. 
        </TaskDetailsElement>
      </TaskDetailsElementGroup>
      <TaskDetailsElementGroup>
        <IoRocketOutline />
        <TaskDetailsElement>
          Lorem ipsum dolor sit amet.
        </TaskDetailsElement>
      </TaskDetailsElementGroup>

      <TaskDetailsTagSection>
        <TaskDetailsTag>fiction</TaskDetailsTag>
        <TaskDetailsTag>story</TaskDetailsTag>
      
      </TaskDetailsTagSection>
    </TaskDetailsWrapper>
  );
};

export default TaskDetails;
