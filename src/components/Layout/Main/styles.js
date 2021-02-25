import styled from "styled-components";

export const MainContainer = styled.div`
  grid-area: main;
  background-color: #fff;
  border-right: 1px solid rgba(112, 112, 112, 0.2);
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 0.3fr 3fr;
  grid-template-areas:
    "main-header"
    "main-content";
`;

export const MainHeader = styled.div`
  grid-area: main-header;
`;

export const MainContent = styled.div`
  grid-area: main-content;
`;
