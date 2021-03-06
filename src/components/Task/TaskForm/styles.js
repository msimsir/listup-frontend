import styled from "styled-components";

export const TaskFormWrapper = styled.div`
  margin-top: 1rem;
  padding-left: 2rem;
  padding-right: 2rem;
  font-size: 0.8rem;
  font-weight: 500;
  position: relative;
`;

export const FormItem = styled.div`
  margin-bottom: 0.5rem;
  width: 100%;

  border-bottom: ${({ borderBottom }) =>
    borderBottom ? "border-bottom: 1px solid rgba(112, 112, 112, 0.2)" : ""};
`;

export const FormRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-end;
  margin-bottom: 0.5rem;
  position: relative;

  & > :first-child {
    margin-right: 0.5rem;
  }
`;

export const Divider = styled.div`
  border-bottom: 1px solid rgba(112, 112, 112, 0.4);
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;
