import { takeLatest, all, put, call } from "redux-saga/effects";
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
} from "../../constants/action-types";

function* handleGetTask(action) {
  try {
    const { data } = yield call(api.getTask);
    yield put({ type: GET_TASK_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TASK_REQUEST_FAILED, payload: error });
  }
}

function* handleCreateTask(action) {
  try {
    const { payload: task } = action;
    const { data } = yield call(api.createTask, task);
    yield put({ type: CREATE_TASK_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TASK_REQUEST_FAILED, payload: error });
  }
}

function* handleUpdateTask(action) {
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

function* handleDeleteTask(action) {
  try {
    const { payload: id } = action;
    const { data } = yield call(api.deleteTask, id);
    yield put({ type: DELETE_TASK_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TASK_REQUEST_FAILED, payload: error });
  }
}

export function* taskWatcherSaga() {
  yield all(
    takeLatest(GET_TASK_REQUEST, handleGetTask),
    takeLatest(CREATE_TASK_REQUEST, handleCreateTask),
    takeLatest(UPDATE_TASK_REQUEST, handleUpdateTask),
    takeLatest(DELETE_TASK_REQUEST, handleDeleteTask)
  );
}
