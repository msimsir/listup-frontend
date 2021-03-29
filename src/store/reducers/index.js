import { combineReducers } from "redux";

import { app } from "./app";
import { uiBehavior } from "./uiBehavior";
import { task } from "./task";
import { list } from "./list";
import { tag } from "./tag";
import { subTask } from "./subTask";

const rootReducer = combineReducers({
  app,
  uiBehavior,
  task,
  list,
  tag,
  subTask,
});

export default rootReducer;
