import styled from "styled-components";

const ListFieldWrapper = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  padding-left: 5px;
  border: 1px solid rgba(112, 112, 112, 0.4);
  border-radius: 0.25rem;
  color: #3e3e56;
  option {
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

const ListField = ({ data }) => {
  return (
    <ListFieldWrapper>
      {data.map((item) => (
        <option key={item} value={item}>
          {item}
        </option>
      ))}
    </ListFieldWrapper>
  );
};

export default ListField;
