import React from 'react'

function todo({todo,toggleTodo}) {
    function handle(){
        toggleTodo(todo.id);
    }
    return (
        <div>
        <label>
            <input type="checkbox" checked={todo.complete} onChange={handle} />
               {todo.name}
            </label>
        </div>
    )
}

export default todo;
