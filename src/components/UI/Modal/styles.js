import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
      font-size: 1.2rem;
      color: #fb743e;
    }
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  & > button {
    margin-left: 0.5rem;
  }

  &:first-child {
    padding-bottom: 0.5rem;
  }

  &:last-child {
    margin-top: 1.5rem;
    justify-content: flex-end;
  }
`;
export const Header = styled.h4`
  padding-left: 0.5rem;
`;
