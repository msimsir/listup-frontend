import {
  GET_TASK_REQUEST,
  GET_TASK_REQUEST_SUCCESS,
  CREATE_TASK_REQUEST,
  CREATE_TASK_REQUEST_SUCCESS,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_REQUEST_SUCCESS,
  DELETE_TASK_REQUEST,
  DELETE_TASK_REQUEST_SUCCESS,
  TASK_REQUEST_FAILED,
} from "../../constants/action-types";

const initialState = {
  tasks: [],
  loading: false,
  error: undefined,
};

export const task = (state = initialState, action) => {
  switch (action.type) {
    case GET_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_TASK_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: action.payload,
      };

    case CREATE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_TASK_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: [...state.tasks, action.payload],
      };

    case UPDATE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_TASK_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.map((task) =>
          task._id === action.payload._id ? action.payload : task
        ),
      };

    case DELETE_TASK_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_TASK_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tasks: state.tasks.filter((task) => task._id !== action.payload),
      };

    case TASK_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
