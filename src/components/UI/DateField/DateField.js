import styled from "styled-components";

const DateField = styled.input.attrs({ type: "date" })`
  width: 100%;
  border: 1px solid rgba(112, 112, 112, 0.4);
  height: 2rem;
  border-radius: 0.25rem;
  outline: none;
`;

export default DateField;
