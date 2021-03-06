import { takeLatest, all, put, call, delay } from "redux-saga/effects";
import * as api from "../../api";
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
  SUBTASK_REQUEST_FAILED,
  SET_SELECTED_TASK,
  UPDATE_SUBTASK_REQUEST_SUCCESS,
} from "../../constants/action-types";

function* handleGetRequest(action) {
  try {
    const { data } = yield call(api.getTask);
    yield put({ type: GET_TASK_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TASK_REQUEST_FAILED, payload: error });
  }
}

function* handleCreateRequest(action) {
  try {
    const { payload: task } = action;
    const { data } = yield call(api.createTask, task);
    yield put({ type: CREATE_TASK_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TASK_REQUEST_FAILED, payload: error });
  }
}

function* handleUpdateRequest(action) {
  try {
    const {
      payload: { id, task },
    } = action;
    const { data } = yield call(api.updateTask, id, task);
    yield put({ type: UPDATE_TASK_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TASK_REQUEST_FAILED, payload: error });
  }
}

function* handleDeleteRequest(action) {
  try {
    const { payload: id } = action;
    const { data } = yield call(api.deleteTask, id);
    const { _id } = data;
    yield put({ type: DELETE_TASK_REQUEST_SUCCESS, payload: _id });
  } catch (error) {
    yield put({ type: TASK_REQUEST_FAILED, payload: error });
  }
}

function* handleSubTaskRequest(action) {
  try {
    const {
      payload: { id, task },
    } = action;
    const { data } = yield call(api.updateTask, id, task);
    yield put({ type: SET_SELECTED_TASK, payload: data });
    yield put({ type: UPDATE_SUBTASK_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: SUBTASK_REQUEST_FAILED, payload: error });
  }
}

export function* taskWatcherSaga() {
  yield all([
    takeLatest(GET_TASK_REQUEST, handleGetRequest),
    takeLatest(CREATE_TASK_REQUEST, handleCreateRequest),
    takeLatest(UPDATE_TASK_REQUEST, handleUpdateRequest),
    takeLatest(DELETE_TASK_REQUEST, handleDeleteRequest),
    takeLatest(UPDATE_SUBTASK_REQUEST, handleSubTaskRequest),
  ]);
}
