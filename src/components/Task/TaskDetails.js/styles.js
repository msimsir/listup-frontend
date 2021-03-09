import styled from "styled-components";

export const TaskDetailsWrapper = styled.div`
  padding: 1rem 2rem;
  width: 100%;
`;

export const TaskDetailsTitleSection = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & > svg {
    margin-right: 0.5rem;
    &:hover {
      font-size: 1rem;
      color: #fb743e;
      font-weight: 700;
    }
  }
`;

export const TaskDetailsElementGroup = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 1rem;
  padding-top: 1rem;
  padding-bottom: 0.25rem;
  & > svg {
    cursor: pointer;
    margin-top: 0.25rem;
    font-size: 0.8rem;
    margin-right: 0.5rem;
    &:hover {
      font-size: 1rem;
      color: #fb743e;
      font-weight: 700;
    }
  }

  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
`;

export const TaskDetailsElement = styled.p`
  font-size: 0.8rem;
  max-width: 90%;
`;

export const TaskDetailsTagSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 1rem;
`;

export const TaskDetailsTag = styled.div`
  border: 1px solid #fb743e;
  border-radius: 0.25rem;
  padding: 0.25rem 0.5rem;
  margin-right: 1rem;
  font-size: 0.8rem;
  color: #fb743e;
`;
