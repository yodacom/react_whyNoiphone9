import React from "react";
import { createStore } from "redux";
import { reducer } from "./reducer.js";

export default createStore(reducer);
