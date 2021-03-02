import {
  INIT_APP,
  INIT_APP_SUCCESS,
  INIT_TASK,
  INIT_TASK_SUCCESS,
  INIT_LIST,
  INIT_LIST_SUCCESS,
  INIT_TAG,
  INIT_TAG_SUCCESS,
  INIT_SCHEDULE,
  INIT_SCHEDULE_SUCCESS,
  INIT_FAILED,
} from "../../constants/action-types";

export const initApp = () => {
  return { type: INIT_APP };
};

export const successInitApp = () => {
  return { type: INIT_APP_SUCCESS };
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

export const initSchedule = () => {
  return { type: INIT_SCHEDULE };
};

export const successInitSchedule = () => {
  return { type: INIT_SCHEDULE_SUCCESS };
};

export const initFailed = (error) => {
  return { type: INIT_FAILED, payload: error };
};
