import {
  GET_LIST_REQUEST,
  GET_LIST_REQUEST_SUCCESS,
  CREATE_LIST_REQUEST,
  CREATE_LIST_REQUEST_SUCCESS,
  UPDATE_LIST_REQUEST,
  UPDATE_LIST_REQUEST_SUCCESS,
  DELETE_LIST_REQUEST,
  DELETE_LIST_REQUEST_SUCCESS,
  LIST_REQUEST_FAILED,
} from "../../constants/action-types";

const initialState = {
  lists: [],
  loading: false,
  error: undefined,
};

export const list = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        lists: action.payload,
      };

    case CREATE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        lists: [...state.lists, action.payload],
      };

    case UPDATE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        lists: [
          ...state.filter((list) => list._id !== action.payload._id),
          action.payload,
        ],
      };

    case DELETE_LIST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_LIST_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        lists: state.lists.filter((list) => list._id !== action.payload._id),
      };

    case LIST_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
