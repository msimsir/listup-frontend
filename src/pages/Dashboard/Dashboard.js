import React from "react";
import Sidebar from "../../components/Layout/Sidebar/Sidebar";
import Main from "../../components/Layout/Main/Main";
import Details from "../../components/Layout/Details/Details";

import { DashboardContainer } from "./styles";

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Sidebar />
      <Main />
      <Details />
    </DashboardContainer>
  );
};

export default Dashboard;
