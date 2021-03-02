import {
  GET_TAG_REQUEST,
  GET_TAG_REQUEST_SUCCESS,
  CREATE_TAG_REQUEST,
  CREATE_TAG_REQUEST_SUCCESS,
  UPDATE_TAG_REQUEST,
  UPDATE_TAG_REQUEST_SUCCESS,
  DELETE_TAG_REQUEST,
  DELETE_TAG_REQUEST_SUCCESS,
  TAG_REQUEST_FAILED,
} from "../../constants/action-types";

const initialState = {
  tags: [],
  loading: false,
  error: undefined,
};

export const tag = (state = initialState, action) => {
  switch (action.type) {
    case GET_TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_TAG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: action.payload,
      };

    case CREATE_TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case CREATE_TAG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: [...state.tags, action.payload],
      };

    case UPDATE_TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case UPDATE_TAG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: [
          ...state.tags.filter((tag) => tag._id === action.payload._id),
          action.payload,
        ],
      };

    case DELETE_TAG_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case DELETE_TAG_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        tags: state.tags.filter((tag) => tag._id !== action.payload._id),
      };

    case TAG_REQUEST_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
