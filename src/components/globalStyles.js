import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: "Poppins", sans-serif;
}
html,body {
height: 100vh;
}

/* styling scrollbar */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px rgba(56, 62, 86, 0.6);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgba(56, 62, 86, 0.9);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(56, 62, 86, 0.9);
  border-radius: 10px;
}
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  color: #3e3e56;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: "column";
  width: 100%;
`;

export default GlobalStyle;
