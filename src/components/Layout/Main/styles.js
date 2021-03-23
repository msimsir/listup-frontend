import styled from "styled-components";

export const MainContainer = styled.div`
  grid-area: main;
  background-color: #fff;
  border-right: 1px solid rgba(112, 112, 112, 0.2);
  overflow-y: auto;
  display: grid;
  /*grid-template-columns: auto;*/
  grid-template-rows: 0.1fr 0.1fr 3fr;
  grid-template-areas:
    "main-header"
    "main-search"
    "main-content";
`;

export const MainHeader = styled.div`
  grid-area: main-header;
  width: 100%;
  height: 100%;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #3e3e56;
  font-weight: bold;
  padding-left: 2rem;
  padding-top: 0.5rem;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 2rem;
  position: relative;
  & > svg {
    font-size: 1.1rem;
    margin-left: 0.4rem;

    &:last-child {
      transform: rotateX(180deg);
    }

    &:hover {
      font-size: 1.2rem;
      color: #fb743e;
    }
  }
`;

export const MainContent = styled.div`
  grid-area: main-content;
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const MainContentSearchWrapper = styled.div`
  grid-area: main-search;
  margin-bottom: 1rem;
  width: 100%;
  height: 100%;
`;
