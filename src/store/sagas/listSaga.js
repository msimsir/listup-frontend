import { takeLatest, all, call, put, delay } from "redux-saga/effects";
import * as api from "../../api";
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

function* handleGetRequest(action) {
  try {
    const { data } = yield call(api.getList);
    yield delay(1000);
    yield put({ type: GET_LIST_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LIST_REQUEST_FAILED, payload: error });
  }
}

function* handleCreateRequest(action) {
  try {
    const { payload: list } = action;
    const { data } = yield call(api.createList, list);
    yield put({ type: CREATE_LIST_REQUEST_SUCCESS, payload: data });
  } catch (error) {
    yield put({ type: LIST_REQUEST_FAILED, payload: error });
  }
}

function* handleUpdateRequest(action) {
  try {
    const { id, list } = action.payload;
    const updatedList = yield call(api.updateList, id, list);
    yield put({ type: UPDATE_LIST_REQUEST_SUCCESS, payload: updatedList });
  } catch (error) {
    yield put({ type: LIST_REQUEST_FAILED, payload: error });
  }
}

function* handleDeleteRequest(action) {
  try {
    const { payload: id } = action;
    const deletedList = yield call(api.deleteList, id);
    yield put({ type: DELETE_LIST_REQUEST_SUCCESS, payload: deletedList });
  } catch (error) {
    yield put({ type: LIST_REQUEST_FAILED, payload: error });
  }
}

export function* listWatcherSaga() {
  yield all([
    takeLatest(GET_LIST_REQUEST, handleGetRequest),
    takeLatest(CREATE_LIST_REQUEST, handleCreateRequest),
    takeLatest(UPDATE_LIST_REQUEST, handleUpdateRequest),
    takeLatest(DELETE_LIST_REQUEST, handleDeleteRequest),
  ]);
}
