import styled from "styled-components";

const handleButtonSize = (size) => {
  switch (size) {
    case "small":
      return "4.25rem";
    case "medium":
      return "6.25rem";
    case "large":
      return "8.25rem";
  }
};

const Button = styled.button`
  width: ${({ size }) => handleButtonSize(size)};
  padding: 0.5rem 0.5rem;
  background: ${({ primary }) =>
    primary ? "#fb743e" : "rgba(112, 112, 112, 0.2)"};
  color: ${({ primary }) => (primary ? "#fff" : "#3e3e56")};
  border-radius: 0.25rem;
  border: none;
  outline: none;
  cursor: pointer;
  &:hover {
    font-weight: 700;
  }
  cursor: pointer;
`;

export default Button;
