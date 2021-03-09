import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  IoTodayOutline,
  IoBedOutline,
  IoBoatOutline,
  IoTrashBinOutline,
  IoBicycleOutline,
  IoFlagOutline,
  IoCheckmark,
  IoSettingsOutline,
  IoNotificationsOutline,
  IoPersonCircleOutline,
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
  SidebarHeaderLogoWrapper,
} from "./styles";
import { setSidebarMenuItem } from "../../../store/actions/uiBehaviorActions";
import ListPanel from "../../List/ListPanel/ListPanel";
import TagPanel from "../../Tag/TagPanel/TagPanel";
import SchedulePanel from "../../Schedule/SchedulePanel/SchedulePanel";
import { getListRequest } from "../../../store/actions/listActions";
import { initDashboard } from "../../../store/actions/appActions";

const Sidebar = () => {
  const [active, setActive] = useState("Today");
  const [activeList, setActiveList] = useState("List");
  const dispatch = useDispatch();

  const initializeApp = () => {
    dispatch(initDashboard());
  };

  useEffect(() => {
    initializeApp();
  }, []);
  return (
    <SidebarContainer>
      <SidebarHeader>
        <span>LISTUP</span>
        <SidebarHeaderLogoWrapper>
          <IoNotificationsOutline />
          <IoPersonCircleOutline />
        </SidebarHeaderLogoWrapper>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenuItem
          active={active === "Today" ? active : undefined}
          onClick={() => {
            setActive("Today");
            dispatch(setSidebarMenuItem(0));
          }}
        >
          <IoTodayOutline />
          <span>Today</span>
        </SidebarMenuItem>
        <SidebarMenuItem
          active={active === "Tomorrow" ? active : undefined}
          onClick={() => {
            setActive("Tomorrow");
            dispatch(setSidebarMenuItem(1));
          }}
        >
          <IoBedOutline />
          <span>Tomorrow</span>
        </SidebarMenuItem>
        <SidebarMenuItem
          active={active === "Next7Days" ? active : undefined}
          onClick={() => {
            setActive("Next7Days");
            dispatch(setSidebarMenuItem(2));
          }}
        >
          <IoBoatOutline />
          <span>Next 7 Days</span>
        </SidebarMenuItem>
        <SidebarSubMenuWrapper>
          <SidebarSubMenuItem
            active={active === "Trash" ? active : undefined}
            onClick={() => {
              setActive("Trash");
              dispatch(setSidebarMenuItem(3));
            }}
          >
            <IoTrashBinOutline />
            <span>Trash</span>
          </SidebarSubMenuItem>
          <SidebarSubMenuItem
            active={active === "Routines" ? active : undefined}
            onClick={() => {
              setActive("Routines");
              dispatch(setSidebarMenuItem(4));
            }}
          >
            <IoBicycleOutline />
            <span>Routines</span>
          </SidebarSubMenuItem>
        </SidebarSubMenuWrapper>
        <SidebarMenuWrapper>
          <SidebarSelector>
            <SidebarSelectorItem
              active={activeList === "List" ? active : undefined}
              onClick={() => setActiveList("List")}
            >
              Lists
            </SidebarSelectorItem>
            <SidebarSelectorItem
              active={activeList === "Tag" ? active : undefined}
              onClick={() => setActiveList("Tag")}
            >
              Tags
            </SidebarSelectorItem>
            <SidebarSelectorItem
              active={activeList === "Schedule" ? active : undefined}
              onClick={() => setActiveList("Schedule")}
            >
              Schedule
            </SidebarSelectorItem>
          </SidebarSelector>
          {activeList === "List" && <ListPanel title={activeList} />}
          {activeList === "Tag" && <TagPanel title={activeList} />}
          {activeList === "Schedule" && <SchedulePanel />}
        </SidebarMenuWrapper>
        <SidebarMenuWrapper>
          <SidebarSubMenuItem
            active={active === "Done" ? active : undefined}
            onClick={() => {
              setActive("Done");
              dispatch(setSidebarMenuItem(5));
            }}
          >
            <IoCheckmark />
            <span>Done</span>
          </SidebarSubMenuItem>
          <SidebarSubMenuItem
            active={active === "Undone" ? active : undefined}
            onClick={() => {
              setActive("Undone");
              dispatch(setSidebarMenuItem(6));
            }}
          >
            <IoFlagOutline />
            <span>Undone</span>
          </SidebarSubMenuItem>
        </SidebarMenuWrapper>
        <SidebarSubMenuWrapper>
          <SidebarSubMenuItem
            active={active === "Settings" ? active : undefined}
            onClick={() => {
              setActive("Settings");
              dispatch(setSidebarMenuItem(7));
            }}
          >
            <IoSettingsOutline />
            <span>Settings</span>
          </SidebarSubMenuItem>
        </SidebarSubMenuWrapper>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;
