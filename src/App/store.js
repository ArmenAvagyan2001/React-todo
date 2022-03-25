import React from "react";
import { createStore } from "redux";
import  {initialTodos, TodosReducers}  from "../fictures/todos";


const store = createStore(TodosReducers,initialTodos);

export default store;