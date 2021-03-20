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
  ON_ADDING_TASK,
  ON_EDITING_TASK,
} from "../../constants/action-types";

// initialize Sidebar data from api
export const initSidebar = () => {
  return { type: INIT_SIDEBAR };
};

export const initSidebarLists = () => {
  return { type: INIT_SIDEBAR_LIST };
};

export const initSidebarTags = () => {
  return { type: INIT_SIDEBAR_TAG };
};

export const initSidebarSchedule = () => {
  return { type: INIT_SIDEBAR_SCHEDULE };
};

export const setSidebarMenuItem = (index) => {
  return { type: SET_SIDEBAR_MENU_ITEM, payload: index };
};

// take sidebarlistpicker index from ["Lists", "Tags", "Schedule"] then send to index
export const setSidebarListPicker = (index) => {
  return { type: SET_SIDEBAR_LIST_PICKER, payload: index };
};

// take name of selected list item then send to title
export const setSidebarListItem = (title) => {
  return { type: SET_SIDEBAR_LIST_ITEM, payload: title };
};

export const setDetailsViewTask = (toggleState) => {
  return { type: SET_DETAILS_VIEW_TASK, payload: toggleState };
};

export const setDetailsAddTask = (toggleState) => {
  return { type: SET_DETAILS_ADD_TASK, payload: toggleState };
};

export const setDetailsEditTask = (toggleState) => {
  return { type: SET_DETAILS_EDIT_TASK, payload: toggleState };
};

export const setModal = (toggleState, activity, name) => {
  return { type: SET_MODAL, payload: { toggleState, activity, name } };
};

export const setOnAddingTask = (onAdding) => {
  return { type: ON_ADDING_TASK, payload: onAdding };
};

export const setOnEditingTask = (onEditing) => {
  return { type: ON_EDITING_TASK, payload: onEditing };
};
