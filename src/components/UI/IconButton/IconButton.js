import styled from "styled-components";

const IconButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 0.25rem;
  outline: none;
  border: 1px solid rgba(112, 112, 112, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  font-size: 1rem;
  cursor: pointer;
  transition: font-size 1s ease-out;
  & > svg {
    color: #3e3e56;
    font-weight: 700;

    &:hover {
      color: #fb743e;
    }

    &:active,
    &:visited {
      font-size: 1.1rem;
      color: #3e3e56;
    }
  }
`;

export default IconButton;
