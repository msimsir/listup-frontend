import React from "react";
import {
  IoTodayOutline,
  IoBedOutline,
  IoBoatOutline,
  IoTrashBinOutline,
  IoBicycleOutline,
  IoFlagOutline,
  IoCheckmark,
  IoSettingsOutline
} from "react-icons/io5";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarContent,
  SidebarMenuWrapper,
  SidebarMenuItem,
  SidebarSubMenuItem,
  SidebarSubMenuWrapper,
  SidebarSelector,
  SidebarSelectorItem,
  SidebarSelectorItemList,
} from "./styles";

const Sidebar = () => {
  return (
    <SidebarContainer>
      <SidebarHeader>LISTUP</SidebarHeader>
      <SidebarContent>
        <SidebarMenuItem>
          <IoTodayOutline />
          <span>Today</span>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <IoBedOutline />
          <span>Tomorrow</span>
        </SidebarMenuItem>
        <SidebarMenuItem>
          <IoBoatOutline />
          <span>Next 7 Days</span>
        </SidebarMenuItem>
        <SidebarSubMenuWrapper>
          <SidebarSubMenuItem>
            <IoTrashBinOutline />
            <span>Trash</span>
          </SidebarSubMenuItem>
          <SidebarSubMenuItem>
            <IoBicycleOutline />
            <span>Routines</span>
          </SidebarSubMenuItem>
        </SidebarSubMenuWrapper>
        <SidebarMenuWrapper>
          <SidebarSelector>
            <SidebarSelectorItem>Lists</SidebarSelectorItem>
            <SidebarSelectorItem>Tags</SidebarSelectorItem>
            <SidebarSelectorItem>Schedule</SidebarSelectorItem>
          </SidebarSelector>
          <SidebarSelectorItemList></SidebarSelectorItemList>
        </SidebarMenuWrapper>
        <SidebarMenuWrapper>
          <SidebarSubMenuItem><IoCheckmark /><span>Done</span></SidebarSubMenuItem>
          <SidebarSubMenuItem><IoFlagOutline /><span>Undone</span></SidebarSubMenuItem>
        </SidebarMenuWrapper>
        <SidebarSubMenuWrapper>
          <SidebarSubMenuItem><IoSettingsOutline /><span>Settings</span></SidebarSubMenuItem>
        </SidebarSubMenuWrapper>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
