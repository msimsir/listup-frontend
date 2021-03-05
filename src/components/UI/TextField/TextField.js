import styled from "styled-components";

const TextField = styled.textarea`
  width: 100%;
  padding-left: 1rem;
  padding-top: 0.5rem;
  border: 1px solid rgba(112, 112, 112, 0.4);
  background-color: #fff;
  border-radius: 0.25rem;
  outline: none;

  &:focus {
    border: 1px solid #3e3e56;
  }
`;

export default TextField;
