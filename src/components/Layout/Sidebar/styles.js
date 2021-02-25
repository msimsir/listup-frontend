import styled from "styled-components";

export const SidebarContainer = styled.div`
  grid-area: sidebar;
  background-color: #f8f8f8;
  border-right: 1px solid rgba(112, 112, 112, 0.2);
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 0.3fr 3fr;
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
  justify-content: center;
  font-weight: bold;
  border-bottom: 1px solid rgba(112, 112, 112, 0.2);
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
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
  padding-left: 2rem;

  &:first-child {
    padding-top: 1.5rem;
  }
  &:last-child {
    padding-bottom: 2rem;
  }

  & > span {
    margin-left: 0.5rem;
  }
`;

export const SidebarSubMenuItem = styled.a`
  display: flex;
  align-items: center;
  font-size: 1rem;
  margin-bottom: 0.75rem;
  padding-left: 2rem;

  &:first-child {
    margin-top: 1.5rem;
  }
  & > span {
    margin-left: 0.5rem;
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

  &:last-child {
    margin-right: 2rem;
  }

  &:hover {
    border-bottom: 1px solid #fb743e;
  }
`;

export const SidebarSelectorItemList = styled.div`
  height: 200px;
  overflow-y: auto;
`;
