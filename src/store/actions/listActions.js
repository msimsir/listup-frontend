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

export const getListRequest = () => {
  return { type: GET_LIST_REQUEST };
};

export const successGetListRequest = (lists) => {
  return { type: GET_LIST_REQUEST_SUCCESS, payload: lists };
};

export const createListRequest = (list) => {
  return { type: CREATE_LIST_REQUEST, payload: list };
};

export const successCreateListRequest = (list) => {
  return { type: CREATE_LIST_REQUEST_SUCCESS, payload: list };
};

export const updateListRequest = (id, list) => {
  return { type: UPDATE_LIST_REQUEST, payload: { id, list } };
};

export const successUpdateListRequest = (list) => {
  return { type: UPDATE_LIST_REQUEST_SUCCESS, payload: list };
};

export const deleteListRequest = (id) => {
  return { type: DELETE_LIST_REQUEST, payload: id };
};

export const successDeleteListRequest = (list) => {
  return { type: DELETE_LIST_REQUEST_SUCCESS, payload: list };
};

export const failedListRequest = (error) => {
  return { type: LIST_REQUEST_FAILED, payload: error };
};
