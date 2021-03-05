import React, { useState } from "react";
import styled from "styled-components";

export const DropdownList = styled.ul`
  position: absolute;
  top: 2rem;
  left: 0;
  width: 50%;
  height: 5rem;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
  border: 1px solid rgba(112, 112, 112, 0.4);
  flex-direction: column;
  z-index: 1;
`;

export const ListItem = styled.li`
  padding-left: 0.5rem;
  &:hover {
    background-color: rgba(112, 112, 112, 0.2);
  }
`;

const Dropdown = ({ data, onSelect }) => {
  const [dropdownData, setDropdownData] = useState(data);

  return (
    <>
      <DropdownList>
        {dropdownData &&
          dropdownData.map((item) => (
            <ListItem
              key={item}
              value={item}
              onClick={() => onSelect(item)}
            >
              {item}
            </ListItem>
          ))}
      </DropdownList>
    </>
  );
};

export default Dropdown;