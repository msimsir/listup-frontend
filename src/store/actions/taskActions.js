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
  UPDATE_SUBTASK_REQUEST,
  UPDATE_SUBTASK_REQUEST_SUCCESS,
  SUBTASK_REQUEST_FAILED,
} from "../../constants/action-types";

export const getTaskRequest = () => {
  return { type: GET_TASK_REQUEST };
};

export const successGetTaskRequest = (tasks) => {
  return { type: GET_TASK_REQUEST_SUCCESS, payload: tasks };
};

export const createTaskRequest = (task) => {
  return { type: CREATE_TASK_REQUEST, payload: task };
};

export const successCreateTaskRequest = (task) => {
  return { type: CREATE_TASK_REQUEST_SUCCESS, payload: task };
};

export const updateTaskRequest = (id, task) => {
  return { type: UPDATE_TASK_REQUEST, payload: { id, task } };
};

export const successUpdateTaskRequest = (task) => {
  return { type: UPDATE_TASK_REQUEST_SUCCESS, payload: task };
};

export const deleteTaskRequest = (id) => {
  return { type: DELETE_TASK_REQUEST, payload: id };
};

export const successDeleteTaskRequest = (task) => {
  return { type: DELETE_TASK_REQUEST_SUCCESS, payload: task };
};

export const failedTaskRequest = (error) => {
  return { type: TASK_REQUEST_FAILED, payload: error };
};

export const updateSubTaskRequest = (id, task) => {
  return { type: UPDATE_SUBTASK_REQUEST, payload: { id, task } };
};

export const successUpdateSubTaskRequest = (task) => {
  return { type: UPDATE_SUBTASK_REQUEST_SUCCESS, payload: task };
};

export const failedSubTaskRequest = (error) => {
  return { type: SUBTASK_REQUEST_FAILED, payload: error };
};
