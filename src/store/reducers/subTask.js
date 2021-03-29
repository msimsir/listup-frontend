import {
  GET_SUBTASK_REQUEST,
  GET_SUBTASK_REQUEST_SUCCESS,
  CREATE_SUBTASK_REQUEST,
  CREATE_SUBTASK_REQUEST_SUCCESS,
  UPDATE_SUBTASK_REQUEST,
  UPDATE_SUBTASK_REQUEST_SUCCESS,
  DELETE_SUBTASK_REQUEST,
  DELETE_SUBTASK_REQUEST_SUCCESS,
  SUBTASK_REQUEST_FAILED,
} from "../../constants/action-types";

const initialState = {
  subTasks: [],
  loading: false,
  error: undefined,
};

export const subTask = (state = initialState, action) => {
  switch (action.type) {
    case GET_SUBTASK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_SUBTASK_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        subTasks: action.payload,
      };

    case CREATE_SUBTASK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_SUBTASK_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        subTasks: [...state.subTasks, action.payload],
      };

    case UPDATE_SUBTASK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_SUBTASK_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        subTasks: state.subTasks.map((subTask) =>
          subTask._id === action.payload._id ? action.payload : subTask
        ),
      };

    case DELETE_SUBTASK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_SUBTASK_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        subTasks: state.subTasks.filter(
          (subTask) => subTask._id !== action.payload
        ),
      };

    case SUBTASK_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
