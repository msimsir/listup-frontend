import React from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import LabelField from "../../UI/LabelField/LabelField";
import Panel from "../../UI/Panel/Panel";
import TextButton from "../../UI/TextButton/TextButton";

const SchedulePanel = () => {
  return (
    <Panel>
      <Panel height="200" overflow>
        <LabelField padding size="small">
          Schedule Panel
        </LabelField>
      </Panel>
      <TextButton size="medium" margin="small">
        <IoAddCircleOutline />
        <span>Add Schedule</span>
      </TextButton>
    </Panel>
  );
};

export default SchedulePanel;
