import React from "react";
import TodoForm from "./todoForm";
import TodoList from "./todoList";
import TodoFooder from "./todoFooder";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";


function App() {  

  const dispatch = useDispatch();
  const initialTodos = useSelector(function(state){
    return state;
  })

  return (
    <div> 
      <TodoForm onAdd={(text) => {
        dispatch({
          type: "add",
          payload: {
            text: text
          }
        })
      }}/>
      <TodoList initialTodos={initialTodos} onDelete={(todo) => {
        return dispatch({
          type: "delete",
          payload: {
            id: todo.id
          }
        })
      }}
      onChange={(newTodo) => {
        dispatch({
          type: "check",
          payload:{
            item: newTodo
          }
        })
      }}/>
      <TodoFooder todos ={initialTodos}
      onClearCompleted={() => {
        dispatch({
          type: "clear",
        })
      }}/>
    </div>
  );
}

export default App;
