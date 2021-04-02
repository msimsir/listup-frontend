import { combineReducers } from "redux";

import { app } from "./app";
import { uiBehavior } from "./uiBehavior";
import { task } from "./task";
import { list } from "./list";
import { tag } from "./tag";

const rootReducer = combineReducers({
  app,
  uiBehavior,
  task,
  list,
  tag,
});

export default rootReducer;
