//importing the combine reducer
import { combineReducers } from "redux";
//importing the task reducer
import {taskReducer  } from "./TaskList";
// defining the root reducer
export const rootReducer =  combineReducers({taskReducer});