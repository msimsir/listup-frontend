import {
  INIT_DASHBOARD,
  INIT_DASHBOARD_SUCCESS,
  INIT_TASK,
  INIT_TASK_SUCCESS,
  INIT_LIST,
  INIT_LIST_SUCCESS,
  INIT_TAG,
  INIT_TAG_SUCCESS,
  INIT_SUBTASK,
  INIT_SUBTASK_SUCCESS,
  INIT_SCHEDULE,
  INIT_SCHEDULE_SUCCESS,
  INIT_FAILED,
  SET_SELECTED_TASK,
  ON_ADDING_TASK,
  ON_EDITING_TASK,
} from "../../constants/action-types";

export const initDashboard = () => {
  return { type: INIT_DASHBOARD };
};

export const successInitDashboard = () => {
  return { type: INIT_DASHBOARD_SUCCESS };
};

export const initTask = () => {
  return { type: INIT_TASK };
};

export const successInitTask = () => {
  return { type: INIT_TASK_SUCCESS };
};

export const initList = () => {
  return { type: INIT_LIST };
};

export const successInitList = () => {
  return { type: INIT_LIST_SUCCESS };
};

export const initTag = () => {
  return { type: INIT_TAG };
};

export const successInitTag = () => {
  return { type: INIT_TAG_SUCCESS };
};

export const initSubTask = () => {
  return { type: INIT_SUBTASK };
};

export const successInitSubTask = () => {
  return { type: INIT_SUBTASK_SUCCESS };
};

export const initSchedule = () => {
  return { type: INIT_SCHEDULE };
};

export const successInitSchedule = () => {
  return { type: INIT_SCHEDULE_SUCCESS };
};

export const initFailed = (error) => {
  return { type: INIT_FAILED, payload: error };
};

export const setSelectedTask = (task) => {
  return { type: SET_SELECTED_TASK, payload: task };
};

export const setOnAddingTask = (onAdding) => {
  return { type: ON_ADDING_TASK, payload: onAdding };
};

export const setOnEditingTask = (onEditing) => {
  return { type: ON_EDITING_TASK, payload: onEditing };
};
