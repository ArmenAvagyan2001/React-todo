import React from "react";

function TodoFooder ({todos, onClearCompleted}) {
    const isCompletedLength = todos.filter((todo) => todo.isCompleted).length
    return (
        <div>
            <span>{isCompletedLength}/{todos.length}</span>
            <button onClick={onClearCompleted}>Clear Completed</button>
        </div>
    );
}

export default TodoFooder