import userStatus from "./auth";
import todoItemsFun from "./todoItems";

import { combineReducers } from "redux";

const rootReducers = combineReducers({
    userStatus,
    todoItemsFun
})

export default rootReducers