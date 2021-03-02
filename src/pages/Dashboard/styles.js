import styled from "styled-components";

export const DashboardContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: grid;
  grid-template-columns: minmax(300px, 0.8fr) 2fr 1.2fr;
  grid-template-rows: 0.3fr 1.5fr 1.5fr;
  grid-template-areas:
    "sidebar main details"
    "sidebar main details"
    "sidebar main details";
`;
