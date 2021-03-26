import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 5;
`;

export const MakeNewTaskWrapper = styled.div`
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
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

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

export const MakeNewTaskContent = styled.div`
  padding: 1rem;
`;

export const MakeNewTaskHeader = styled.h4`
  width: 100%;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
  padding-top: 0.5rem;
  padding-left: 2rem;
`;

export const MakeNewTaskItemGroup = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  margin-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  & > svg {
    margin-right: 0.5rem;
  }

  & > div {
    margin-right: 2rem;
  }
`;

export const MakeNewTaskElement = styled.div`
  font-size: 0.8rem;
  max-width: 100%;
  display: flex;
  align-items: center;

  & > svg {
    margin-right: 0.25rem;
  }

  & > span {
    margin-right: 0.5rem;
    color: #fb743e;
  }

  & > a {
    margin-left: 0.5rem;
    color: #fb743e;
  }
`;

export const MakeNewTaskActions = styled.div`
  width: 100%;
  border-top: 1px solid rgba(112, 112, 112, 0.2);
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > button {
    margin-left: 0.5rem;
  }
`;
