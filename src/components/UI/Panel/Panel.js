import styled, { css } from "styled-components";

const loaderStyles = `
display: flex;
align-items: center;
justify-content: center;
`;

const Panel = styled.div`
  position: relative;
  height: ${({ height }) => (height ? `${height}px` : undefined)};
  overflow-y: ${({ overflow }) => (overflow ? `auto` : undefined)};

  ${({ loaderActive }) =>
    loaderActive === "true"
      ? css`
          ${loaderStyles}
        `
      : ""};
`;
export default Panel;
