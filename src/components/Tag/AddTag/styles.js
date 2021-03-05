import styled from "styled-components";
import { Row } from "../../globalStyles";

export const AddTagWrapper = styled.div`
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

export const AddTagRow = styled(Row)`
  justify-content: ${(flexRight) => (flexRight ? "flex-end" : "space-around")};
  margin-top: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;

  &:first-child {
    padding-top: 0.5rem;
  }

  &:last-child {
    border-top: 1px solid rgba(112, 112, 112, 0.2);
    padding-top: 1rem;
    margin-bottom: ${(bottom) => (bottom ? "1rem" : undefined)};
  }

  & > :first-child {
    margin-right: 0.5rem;
  }
  ${Row}
`;

export const AddTagHeader = styled.h4`
  width: 100%;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
  padding-top: 0.5rem;
  padding-left: 1rem;
`;
