import styled from "styled-components";

const handleButtonSize = (size) => {
  switch (size) {
    case "small":
      return "0.8rem";
    case "medium":
      return "1rem";
    case "large":
      return "1.25rem";
  }
};

const handleMarginSize = (margin) => {
  switch (margin) {
    case "small":
      return "0.5rem";
    case "medium":
      return "0.75rem";
    case "large":
      return "1.25rem";
  }
};

const TextButton = styled.a`
  display: flex;
  align-items: center;
  font-size: ${({ size }) => handleButtonSize(size)};
  margin-top: 0.5rem;
  margin-bottom: ${({ margin }) => handleMarginSize(margin)};
  padding-left: 2rem;
  transition: all 0.2s ease;
  width: 100%;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;

  & > svg {
    margin-right: 0.5rem;
  }

  &:hover {
    color: #fb743e;
    font-weight: 700;
  }

  color: ${({ clicked }) => (clicked ? "#fb743e" : "#3e3e56")};
  font-weight: ${({ clicked }) => (clicked ? "700" : "400")};
`;

export default TextButton;
