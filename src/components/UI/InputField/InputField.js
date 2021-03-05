import styled from "styled-components";

const InputField = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid rgba(112, 112, 112, 0.4);
  background-color: #fff;
  padding-left: 1rem;
  border-radius: 0.25rem;
  height: 2rem;

  &:focus {
    border: 1px solid #3e3e56;
  }
`;

export default InputField;
