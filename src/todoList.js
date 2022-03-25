import React from "react";
import TodoListItem from "./todoListItem";

function TodoList ({initialTodos, onDelete, onChange}) {
    return (
        <div>
            {
                initialTodos.map((todo) => {
                    return (
                        <TodoListItem key={todo.id} todo={todo} onDelete={onDelete} onChange={onChange} />
                    );
                })
            }
        </div>
    )
    
}

export default TodoList