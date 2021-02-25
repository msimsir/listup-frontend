import styled from "styled-components";

export const DetailsContainer = styled.div`
  grid-area: details;
  background-color: #fff;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 0.3fr 1.5fr 1.5fr;
  grid-template-areas:
    "details-header"
    "details-section-one"
    "details-section-two";
`;

export const DetailsHeader = styled.div`
  grid-area: details-header;
`;

export const DetailsSectionOne = styled.div`
  grid-area: details-section-one;
`;
export const DetailsSectionTwo = styled.div`
  grid-area: details-section-two;
`;
