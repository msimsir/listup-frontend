import styled from "styled-components";

export const TrashItem = styled.div`
  width: 100%;
  background-color: #fff;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
  padding: 0.5rem 2rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  &:hover {
    background-color: rgba(56, 62, 86, 0.06);
  }
`;

export const TrashHeader = styled.div``;

export const TrashActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  & > button {
    margin-left: 0.5rem;
  }
`;
