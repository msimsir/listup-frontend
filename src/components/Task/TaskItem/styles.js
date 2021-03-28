import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 100%;
  //background-color: #f3f3f3;
  //background-color: rgba(56, 62, 86, 0.06);
  background-color: #fff;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
  padding: 0.5rem 2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgba(56, 62, 86, 0.06);
  }
`;
export const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const CardTitle = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  & > svg {
    margin-right: 0.5rem;
    &:hover {
      color: #fb743e;
    }
  }
  & > span:hover {
    font-weight: 700;
  }
`;
export const CardNotification = styled.div`
  color: #fb743e;
`;
export const CardContent = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
`;
export const CardElementGroup = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8rem;
  padding-left: 2rem;
  padding-top: 0.5rem;
  overflow-y: hidden;

  & > svg {
    margin-right: 0.5rem;
  }
`;
export const CardElement = styled.p``;
