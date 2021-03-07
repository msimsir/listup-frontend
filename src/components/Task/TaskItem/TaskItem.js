import React from "react";
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

const TaskItem = ({ title }) => {
  return (
    <CardWrapper>
      <CardHeader>
        <CardTitle>
          <IoSquareOutline /> {title}
        </CardTitle>
        <CardNotification>Today</CardNotification>
      </CardHeader>
      <CardContent>
        {/** Controlling subtask if it exists, includes just first element in this card */}

        <CardElementGroup>
          <IoRocketOutline />
          <CardElement>search giant usage in fiction</CardElement>
        </CardElementGroup>
        <CardElementGroup>
          <CardElement>40%</CardElement>
        </CardElementGroup>
      </CardContent>
    </CardWrapper>
  );
};

export default TaskItem;
