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

export const getSubTaskRequest = () => {
  return { type: GET_SUBTASK_REQUEST };
};

export const successGetSubTaskRequest = (subTasks) => {
  return { type: GET_SUBTASK_REQUEST_SUCCESS, payload: subTasks };
};

export const createSubTaskRequest = (subTask) => {
  return { type: CREATE_SUBTASK_REQUEST, payload: subTask };
};

export const successCreateSubTaskRequest = (subTask) => {
  return { type: CREATE_SUBTASK_REQUEST_SUCCESS, payload: subTask };
};

export const updateSubTaskRequest = (id, subTask) => {
  return { type: UPDATE_SUBTASK_REQUEST, payload: { id, subTask } };
};

export const successUpdateTaskRequest = (subTask) => {
  return { type: UPDATE_SUBTASK_REQUEST_SUCCESS, payload: subTask };
};

export const deleteSubTaskRequest = (id) => {
  return { type: DELETE_SUBTASK_REQUEST, payload: id };
};

export const successDeleteTaskRequest = (subTask) => {
  return { type: DELETE_SUBTASK_REQUEST_SUCCESS, payload: subTask };
};

export const failedSubTaskRequest = (error) => {
  return { type: SUBTASK_REQUEST_FAILED, payload: error };
};
