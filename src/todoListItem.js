import React from "react";
import { todosReducer } from "./fictures/todos";

function TodoListItem ({todo, onDelete, onChange}) {
    return (
        <div>
            <label>
                <input type="checkbox" checked={todo.isCompleted} onChange={(e) => {
                    onChange({
                        ...todo,
                        isCompleted: e.target.checked
                    });
                }}/>
                {todo.text}
                <button onClick={() => {
                    onDelete(todo)
                }}>X</button>
            </label>
        </div>
        
        
    );
}

export default TodoListItem