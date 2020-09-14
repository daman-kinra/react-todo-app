import React from 'react';
import Todo from './todo'
const TodoList =({todo,toggleTodo})=> {
    return (
        todo.map((items)=>{
            return (<Todo key ={ items.id } todo={items} toggleTodo={toggleTodo}/>);
        })
     );
}
 
export default TodoList;