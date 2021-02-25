import React from "react";
import Dashboard from "../pages/Dashboard/Dashboard";
import GlobalStyle from "./globalStyles";
import { Container } from "./globalStyles";

const App = () => {
  return (
    <Container>
      <GlobalStyle />
      <Dashboard />
    </Container>
  );
};

export default App;
