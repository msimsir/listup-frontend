import styled, { css } from "styled-components";

export const SidebarSelectorWrapper = styled.div`
  position: relative;
`;

const loaderStyles = `
display: flex;
align-items: center;
justify-content: center;
`;

export const SidebarSelectorList = styled.div`
  height: 200px;
  overflow-y: auto;

  ${({ loaderActive }) =>
    loaderActive === "true"
      ? css`
          ${loaderStyles}
        `
      : ""};
`;

export const SidebarListItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0.75rem;
  padding-left: 2rem;
  transition: all 0.2s ease;
  width: 100%;
  text-decoration: none;
  outline: none;
  border: none;

  & > span {
    margin-left: 0.5rem;
  }

  &:hover {
    color: #fb743e;
    font-weight: 700;
  }
`;

export const InfoHeader = styled.p`
  margin-top: 1rem;
  margin-left: 2rem;
  font-size: 0.8rem;
`;

export const ButtonWrapper = styled.a`
  display: flex;
  align-items: center;
  padding-left: 2rem;
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  cursor: pointer;

  & > svg {
    margin-right: 0.5rem;
  }

  &:hover {
    color: #fb743e;
  }

  color: ${({ clicked }) => (clicked ? "#fb743e" : "#3e3e56")};
  font-weight: ${({ clicked }) => (clicked ? "700" : "400")};
`;
