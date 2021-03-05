import styled from "styled-components";

const handleFontSize = (size) => {
  switch (size) {
    case "small":
      return "0.8rem";
    case "medium":
      return "1rem";
    case "large":
      return "1.25rem";
  }
};

const handleLabelWidth = (width) => {
  switch (width) {
    case "column":
      return "50%";
    case "row":
      return "100%";
  }
};

const LabelField = styled.p`
  font-size: ${({ size }) => handleFontSize(size)};
  width: ${({ width }) => handleLabelWidth(width)};
  padding: ${({ padding }) => (padding ? "0.5rem 2rem" : undefined)};
`;

export default LabelField;
