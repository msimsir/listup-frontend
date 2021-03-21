import { sidebarMenuItems, sidebarList } from "../../constants/ui-elements";
import {
  INIT_SIDEBAR,
  INIT_SIDEBAR_LIST,
  INIT_SIDEBAR_TAG,
  INIT_SIDEBAR_SCHEDULE,
  SET_SIDEBAR_MENU_ITEM,
  SET_SIDEBAR_LIST_ITEM,
  SET_SIDEBAR_LIST_PICKER,
  SET_DETAILS_VIEW_TASK,
  SET_DETAILS_ADD_TASK,
  SET_DETAILS_EDIT_TASK,
  SET_MODAL,
} from "../../constants/action-types";

const initialState = {
  sidebarInit: false,
  sidebarTaskInitialize: false,
  sidebarListInitialize: false,
  sidebarTagInitialize: false,
  sidebarScheduleInitialize: false,
  sidebarMenu: sidebarMenuItems,
  sidebarList: sidebarList,
  selectedSidebarMenu: sidebarMenuItems[0],
  selectedSidebarList: sidebarList[0],
  mainHeaderTitle: sidebarMenuItems[0],
  mainAddTask: false,
  mainAscendingSort: false,
  mainDescendingSort: false,
  detailsHeaderTitle: "",
  detailsViewTask: false,
  detailsAddTask: false,
  detailsEditTask: false,
  modalView: false,
  modalActions: null,
  modalActionName: [],
};

export const uiBehavior = (state = initialState, action) => {
  switch (action.type) {
    case INIT_SIDEBAR:
      return {
        ...state,
        sidebarInit: true,
        sidebarTaskInitialize: true,
      };

    case INIT_SIDEBAR_LIST:
      return {
        ...state,
        sidebarListInitialize: true,
      };

    case INIT_SIDEBAR_TAG:
      return {
        ...state,
        sidebarTagInitialize: true,
      };

    case INIT_SIDEBAR_SCHEDULE:
      return {
        ...state,
        sidebarScheduleInitialize: true,
      };

    case SET_SIDEBAR_MENU_ITEM:
      return {
        ...state,
        selectedSidebarMenu: sidebarMenuItems[action.payload],
        mainHeaderTitle: sidebarMenuItems[action.payload],
      };

    case SET_SIDEBAR_LIST_PICKER:
      return {
        ...state,
        selectedSidebarList: sidebarList[action.payload],
      };

    case SET_SIDEBAR_LIST_ITEM:
      return {
        ...state,
        mainHeaderTitle: action.payload,
      };

    case SET_DETAILS_VIEW_TASK:
      return {
        ...state,
        detailsViewTask: action.payload,
        detailsAddTask: false,
        detailsEditTask: false,
      };

    case SET_DETAILS_ADD_TASK:
      return {
        ...state,
        detailsAddTask: action.payload,
        detailsEditTask: false,
        detailsViewTask: false,
      };

    case SET_DETAILS_EDIT_TASK:
      return {
        ...state,
        detailsEditTask: action.payload,
        detailsAddTask: false,
        detailsViewTask: false,
      };

    case SET_MODAL:
      return {
        ...state,
        modalView: action.payload.toggleState,
        modalActions: action.payload.activity,
        modalActionName: action.payload.name,
      };

    default:
      return state;
  }
};
