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

export const getTagRequest = () => {
  return { type: GET_TAG_REQUEST };
};

export const successTagGetRequest = (tags) => {
  return { type: GET_TAG_REQUEST_SUCCESS, payload: tags };
};

export const createTagRequest = (tag) => {
  return { type: CREATE_TAG_REQUEST, payload: tag };
};

export const successCreateTagRequest = (tag) => {
  return { type: CREATE_TAG_REQUEST_SUCCESS, payload: tag };
};

export const updateTagRequest = (id, tag) => {
  return { type: UPDATE_TAG_REQUEST, payload: { id, tag } };
};

export const successUpdateTagRequest = (tag) => {
  return { type: UPDATE_TAG_REQUEST_SUCCESS, payload: tag };
};

export const deleteTagRequest = (id) => {
  return { type: DELETE_TAG_REQUEST, payload: id };
};

export const successDeleteTagRequest = (tag) => {
  return { type: DELETE_TAG_REQUEST_SUCCESS, payload: tag };
};

export const failedTagRequest = (error) => {
  return { type: TAG_REQUEST_FAILED, payload: error };
};
