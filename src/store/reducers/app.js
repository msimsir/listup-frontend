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

const initialState = {
  appLoading: false,
  appError: undefined,
};
export const app = (state = initialState, action) => {
  switch (action.type) {
    case INIT_APP:
    case INIT_TASK:
    case INIT_LIST:
    case INIT_TAG:
    case INIT_SCHEDULE:
      return { ...state, appLoading: true };
    case INIT_APP_SUCCESS:
    case INIT_TASK_SUCCESS:
    case INIT_LIST_SUCCESS:
    case INIT_TAG_SUCCESS:
    case INIT_SCHEDULE_SUCCESS:
      return {
        ...state,
        appLoading: false,
      };
    case INIT_FAILED:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};
