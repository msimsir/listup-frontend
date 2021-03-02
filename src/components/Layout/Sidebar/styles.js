import styled from "styled-components";

export const SidebarContainer = styled.div`
  grid-area: sidebar;
  background-color: #f8f8f8;
  border-right: 1px solid rgba(112, 112, 112, 0.2);
  overflow-y: auto;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: minmax(4rem, 0.3fr) 3fr;
  grid-template-areas:
    "sidebar-header"
    "sidebar-content";
`;

export const SidebarHeader = styled.div`
  grid-area: sidebar-header;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 1.5rem;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);

  & > span {
    padding-left: 2rem;
  }
`;

export const SidebarHeaderLogoWrapper = styled.div`
  display: flex;
  align-items: center;

  & > svg {
    margin-left: 0.5rem;
  }

  &:last-child {
    margin-right: 2rem;
  }
`;

export const SidebarContent = styled.div`
  grid-area: sidebar-content;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const SidebarMenuWrapper = styled.div`
  width: 100%;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
  
`;

export const SidebarSubMenuWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.5rem;
`;

export const SidebarMenuItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  margin-bottom: 0.75rem;
  padding-left: 2rem;
  transition: all 0.2s ease;
  width: 100%;
  text-decoration: none;
  outline: none;
  border: none;
  cursor: pointer;

  &:first-child {
    margin-top: 2rem;
  }
  &:last-child {
    margin-bottom: 2rem;
  }

  color: ${({ active }) => active && "#fb743e"};
  border-right: ${({ active }) => active && "2px solid #fb743e"};
  font-weight: ${({ active }) => active && "700"};

  & > span {
    margin-left: 0.5rem;
  }

  &:hover {
    color: #fb743e;
    border-right: 2px solid #fb743e;
  }
`;

export const SidebarSubMenuItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  padding-left: 2rem;
  transition: all 0.2s ease;
  cursor: pointer;

  &:first-child {
    margin-top: 1rem;
  }
  & > span {
    margin-left: 0.5rem;
  }

  color: ${({ active }) => active && "#fb743e"};
  border-right: ${({ active }) => active && "2px solid #fb743e"};
  font-weight: ${({ active }) => active && "700"};

  &:hover {
    color: #fb743e;
    border-right: 2px solid #fb743e;
  }
`;

export const SidebarSelector = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  overflow-x: auto;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
  -webkit-overflow-scrolling: touch;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const SidebarSelectorItem = styled.a`
  margin-left: 2rem;
  flex: 0 0 auto;
  transition: all 0.2s ease;
  cursor: pointer;

  color: ${({ active }) => active && "#fb743e"};
  border-bottom: ${({ active }) => active && "1px solid #fb743e"};
  font-weight: ${({ active }) => active && "700"};

  &:last-child {
    margin-right: 2rem;
  }

  &:hover {
    border-bottom: 1px solid #fb743e;
  }
`;
