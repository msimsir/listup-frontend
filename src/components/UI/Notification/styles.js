import styled from "styled-components";

export const NotificationWrapper = styled.div`
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
