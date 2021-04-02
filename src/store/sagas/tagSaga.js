import { takeLatest, all, put, call, delay } from "redux-saga/effects";
import * as api from "../../api";

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

function* handleGetRequest(action) {
  try {
    const { data } = yield call(api.getTag);
    yield put({ type: GET_TAG_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TAG_REQUEST_FAILED, paylaod: error });
  }
}
function* handleCreateRequest(action) {
  try {
    const { payload: tag } = action;
    const { data } = yield call(api.createTag, tag);
    yield put({ type: CREATE_TAG_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TAG_REQUEST_FAILED, paylaod: error });
  }
}
function* handleUpdateRequest(action) {
  try {
    const {
      payload: { id, tag },
    } = action;
    const { data } = yield call(api.updateTag, id, tag);
    yield put({ type: UPDATE_TAG_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TAG_REQUEST_FAILED, paylaod: error });
  }
}
function* handleDeleteRequest(action) {
  try {
    const { payload: id } = action;
    const { data } = yield call(api.deleteTag, id);
    yield put({ type: DELETE_TAG_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: TAG_REQUEST_FAILED, paylaod: error });
  }
}
export function* tagWatcherSaga() {
  yield all([
    takeLatest(GET_TAG_REQUEST, handleGetRequest),
    takeLatest(CREATE_TAG_REQUEST, handleCreateRequest),
    takeLatest(UPDATE_TAG_REQUEST, handleUpdateRequest),
    takeLatest(DELETE_TAG_REQUEST, handleDeleteRequest),
  ]);
}
