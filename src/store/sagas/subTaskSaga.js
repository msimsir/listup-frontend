import { takeLatest, all, put, call, delay } from "redux-saga/effects";
import * as api from "../../api";

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
  SET_CURRENT_SUBTASK,
} from "../../constants/action-types";

function* handleGetRequest(action) {
  try {
    const { data } = yield call(api.getSubTask);
    yield delay(1000);
    yield put({ type: GET_SUBTASK_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: SUBTASK_REQUEST_FAILED, payload: error });
  }
}

function* handleCreateRequest(action) {
  try {
    const { payload: subTask } = action;
    const { data } = yield call(api.createSubTask, subTask);
    yield put({ type: CREATE_SUBTASK_REQUEST_SUCCESS, payload: data });
    yield put({ type: SET_CURRENT_SUBTASK, payload: data });
  } catch (error) {
    yield put({ type: SUBTASK_REQUEST_FAILED, payload: error });
  }
}

function* handleUpdateRequest(action) {
  try {
    const {
      payload: { id, subTask },
    } = action;
    const { data } = yield call(api.updateSubTask, id, subTask);
    yield put({ type: UPDATE_SUBTASK_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: SUBTASK_REQUEST_FAILED, payload: error });
  }
}

function* handleDeleteRequest(action) {
  try {
    const { payload: id } = action;
    const { data } = yield call(api.deleteSubTask, id);
    const { _id } = data;
    yield put({ type: DELETE_SUBTASK_REQUEST_SUCCESS, payload: _id });
  } catch (error) {
    yield put({ type: SUBTASK_REQUEST_FAILED, payload: error });
  }
}

export function* subTaskWatcherSaga() {
  yield all([
    takeLatest(GET_SUBTASK_REQUEST, handleGetRequest),
    takeLatest(CREATE_SUBTASK_REQUEST, handleCreateRequest),
    takeLatest(UPDATE_SUBTASK_REQUEST, handleUpdateRequest),
    takeLatest(DELETE_SUBTASK_REQUEST, handleDeleteRequest),
  ]);
}
