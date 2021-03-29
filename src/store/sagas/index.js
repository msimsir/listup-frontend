import { all } from "redux-saga/effects";
import { appWatcherSaga as appSaga } from "./appSaga";
import { taskWatcherSaga as taskSaga } from "./taskSaga";
import { listWatcherSaga as listSaga } from "./listSaga";
import { tagWatcherSaga as tagSaga } from "./tagSaga";
import { subTaskWatcherSaga as subTaskSaga } from "./subTaskSaga";

export default function* rootSaga() {
  yield all([appSaga(), taskSaga(), listSaga(), tagSaga(), subTaskSaga()]);
}
