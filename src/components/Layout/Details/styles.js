import styled from "styled-components";

export const DetailsContainer = styled.div`
  grid-area: details;
  width: 100%;
  height: 100%;
  background-color: #f8f8f8;
  display: grid;
  /*grid-template-columns: auto;*/
  grid-template-rows: 0.3fr 1.5fr 1.5fr;
  grid-template-areas:
    "details-header"
    "details-section-one"
    "details-section-two";
`;

export const DetailsHeader = styled.div`
  grid-area: details-header;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
`;

export const DetailsHeaderElement = styled.div`
  & > p {
    font-size: 1.2rem;
    color: #fb743e;
    font-weight: 700;
  }

  & > svg {
    margin-left: 0.25rem;

    &:hover {
      font-size: 1.1rem;
      color: #fb743e;
      font-weight: 700;
    }
  }
`;

export const DetailsSectionOne = styled.div`
  width: 100%;
  height: 100%;
  grid-area: details-section-one;
`;
export const DetailsSectionTwo = styled.div`
  width: 100%;
  height: 100%;
  grid-area: details-section-two;
`;
