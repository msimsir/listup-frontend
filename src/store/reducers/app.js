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
  SET_CURRENT_SUBTASK,
} from "../../constants/action-types";

const initialState = {
  appLoading: false,
  appError: undefined,
  selectedTask: null,
  onAddingTask: false,
  onEditingTask: false,
  currentSubTask: null,
};
export const app = (state = initialState, action) => {
  switch (action.type) {
    case INIT_DASHBOARD:
    case INIT_TASK:
    case INIT_LIST:
    case INIT_TAG:
    case INIT_SUBTASK:
    case INIT_SCHEDULE:
      return { ...state, appLoading: true };

    case INIT_DASHBOARD_SUCCESS:
    case INIT_TASK_SUCCESS:
    case INIT_LIST_SUCCESS:
    case INIT_TAG_SUCCESS:
    case INIT_SUBTASK_SUCCESS:
    case INIT_SCHEDULE_SUCCESS:
      return {
        ...state,
        appLoading: false,
      };

    case INIT_FAILED:
      return { ...state, error: action.payload };

    case SET_SELECTED_TASK:
      return { ...state, selectedTask: action.payload };

    case ON_ADDING_TASK:
      return {
        ...state,
        onAddingTask: action.payload,
      };

    case ON_EDITING_TASK:
      return {
        ...state,
        onEditingTask: action.payload,
      };

    case SET_CURRENT_SUBTASK:
      return {
        ...state,
        currentSubTask: action.payload,
      };

    default:
      return state;
  }
};
