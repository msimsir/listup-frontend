import { takeLatest, all, call, put, delay } from "redux-saga/effects";
import {
  INIT_DASHBOARD,
  INIT_DASHBOARD_SUCCESS,
  INIT_SIDEBAR,
  INIT_TASK,
  INIT_TASK_SUCCESS,
  INIT_LIST,
  INIT_LIST_SUCCESS,
  INIT_TAG,
  INIT_TAG_SUCCESS,
  INIT_SCHEDULE,
  INIT_SCHEDULE_SUCCESS,
  INIT_FAILED,
  INIT_SIDEBAR_LIST,
  INIT_SIDEBAR_TAG,
  INIT_SIDEBAR_SCHEDULE,
  GET_TASK_REQUEST,
  GET_LIST_REQUEST,
  GET_TAG_REQUEST,
} from "../../constants/action-types";

function* handleInitDashboard(action) {
  try {
    // get tasks
    yield put({ type: INIT_SIDEBAR });
    yield put({ type: INIT_TASK });
    // get lists
    yield put({ type: INIT_LIST });
    yield delay(4000);
    yield put({ type: INIT_DASHBOARD_SUCCESS });
  } catch (error) {
    yield put({ type: INIT_FAILED, payload: error });
  }
}

function* handleInitTask(action) {
  try {
    yield put({ type: GET_TASK_REQUEST });
    yield delay(2000);
    yield put({ type: INIT_TASK_SUCCESS });
  } catch (error) {
    yield put({ type: INIT_FAILED, payload: error });
  }
}

function* handleInitList(action) {
  try {
    //get lists
    yield put({ type: GET_LIST_REQUEST });
    // set state of sidebarlistinit
    yield put({ type: INIT_SIDEBAR_LIST });
    yield delay(2000);
    yield put({ type: INIT_LIST_SUCCESS });
  } catch (error) {
    yield put({ type: INIT_FAILED, payload: error });
  }
}

function* handleInitTag(action) {
  try {
    //get tags
    yield put({ type: GET_TAG_REQUEST });
    // set state of sidebartaginit
    yield put({ type: INIT_SIDEBAR_TAG });
    yield delay(2000);
    yield put({ type: INIT_TAG_SUCCESS });
  } catch (error) {
    yield put({ type: INIT_FAILED, payload: error });
  }
}

function* handleInitSchedule(action) {
  try {
    //get schedule

    // set state of sidebarscheduleinit
    yield put({ type: INIT_SIDEBAR_SCHEDULE });
    yield put({ type: INIT_SCHEDULE_SUCCESS });
  } catch (error) {
    yield put({ type: INIT_FAILED, payload: error });
  }
}

export function* appWatcherSaga() {
  yield all([
    takeLatest(INIT_DASHBOARD, handleInitDashboard),
    takeLatest(INIT_TASK, handleInitTask),
    takeLatest(INIT_LIST, handleInitList),
    takeLatest(INIT_TAG, handleInitTag),
    takeLatest(INIT_SCHEDULE, handleInitSchedule),
  ]);
}
