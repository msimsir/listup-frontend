import styled from "styled-components";

const Paper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
  width: 100%;
  min-height: 2rem;
  background: white;
  border: 1px solid rgba(112, 112, 112, 0.4);
  border-radius: 0.25rem;
  color: #3e3e56;
  outline: none;
  overflow-y: auto;
  padding-left: 0.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;

  & > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: rgba(112, 112, 112, 0.2);
    border: 1px solid rgba(112, 112, 112, 0.4);
    border-radius: 0.25rem;
    margin: 0.25rem;
    padding: 0 1rem;
    position: relative;
    min-width: 5rem;
    
    & > svg {
      position: absolute;
      right: 0.2rem;
      top: 0.2rem;

      &:hover {
        color: #fb743e;
        font-size: 0.8rem;
        font-weight: 700;
      }
    }
  }
`;

export default Paper;
