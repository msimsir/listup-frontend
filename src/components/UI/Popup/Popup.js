import React from "react";
import { IoCloseOutline, IoAlertCircleOutline } from "react-icons/io5";
import styled from "styled-components";

const PopupWrapper = styled.div`
  position: absolute;
  bottom: 1.5rem;
  left: -1rem;
  z-index: 10;
  margin: 1rem;
  background-color: rgba(255, 255, 255);
  box-shadow: 6px 6px 12px 2px rgba(56, 62, 86, 0.5);
  border-radius: 0.25rem;
  display: flex;
  padding: 1rem;

  & > svg {
    position: absolute;
    top: 0.5rem;
    right: 0.5rem;

    &:hover {
      font-size: 0.9rem;
      color: #fb743e;
    }
  }
`;

const PopupContent = styled.div`
  display: flex;
  align-items: center;
  & > svg {
    margin-right: 0.5rem;
  }
`;

const Popup = ({ text, onClose }) => {
  return (
    <PopupWrapper>
      <IoCloseOutline onClick={() => onClose(false)} />
      <PopupContent>
        <IoAlertCircleOutline />
        {text}
      </PopupContent>
    </PopupWrapper>
  );
};

export default Popup;
