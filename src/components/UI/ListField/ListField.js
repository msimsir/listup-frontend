import styled from "styled-components";

const ListField = styled.select`
  width: 100%;
  height: 2rem;
  background: white;
  padding-left: 0.5rem;
  border: 1px solid rgba(112, 112, 112, 0.4);
  border-radius: 0.25rem;
  color: #3e3e56;

  option {
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 0.5rem 0.1rem;
  }
`;

export default ListField;
