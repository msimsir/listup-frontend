import styled from "styled-components";

export const AddListWrapper = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  z-index: 10;
  margin: 1rem;
  background-color: rgba(255, 255, 255);
  box-shadow: 6px 6px 12px 2px rgba(56, 62, 86, 0.5);
  border-radius: 0.25rem;

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

export const AddListRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(flexRight) => (flexRight ? "flex-end" : "space-around")};
  width: 100%;
  margin-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  &:first-child {
    padding-top: 0.5rem;
  }

  &:last-child {
    border-top: 1px solid rgba(112, 112, 112, 0.2);
    padding-top: 1rem;
  }
`;

export const AddListHeader = styled.h4`
  width: 100%;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
  padding-top: 0.5rem;
  padding-left: 1rem;
`;

export const AddListLabel = styled.p`
  width: 50%;
`;

export const AddListInput = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid rgba(112, 112, 112, 0.4);
  background-color: #fff;
  padding-left: 1rem;
  border-radius: 0.25rem;
  height: 30px;
  //background-color: rgba(112, 112, 112, 0.2);
  //border: none;
  &:focus {
    border: 1px solid #3e3e56;
  }
`;

export const AddListButton = styled.button`
  margin-left: 1rem;
  margin-bottom: 1rem;
  display: inline-block;
  // old-padding: 0.25rem 0.5rem
  padding: 0.5rem 0.5rem;
  width: 4.25rem;
  background: ${({ cancelButton }) =>
    cancelButton ? "rgba(112, 112, 112, 0.2)" : "#fb743e"};
  color: ${({ cancelButton }) => (cancelButton ? "#3e3e56" : "#fff")};
  border-radius: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;

  &:hover {
    font-weight: 700;
  }
`;
