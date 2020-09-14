import React,{useState, useRef, useEffect} from 'react';
import './App.css';
import TodoList from './TodoList';
import uuidv4 from 'uuid/dist/v4';

const local_key = 'todoapp.todo'
function App() {

  const [todo, setTodo] = useState([]);
  const todonameref =useRef();
  useEffect(()=>{
    const storedTodos = JSON.parse(localStorage.getItem(local_key));
    if(storedTodos){
      setTodo(storedTodos);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem(local_key, JSON.stringify(todo))
  },[todo])

  const toggleTodo =(id)=>{
    const newTodo = [...todo];
    const todos = newTodo.find(todos => todos.id===id)
    todos.complete = !todos.complete;
    setTodo(newTodo);
  }
  const setter =(e) =>{
    const name=todonameref.current.value;
    if(name!==''){
      setTodo(prev=>{
        return[...prev,{id: uuidv4(), name: name, complete: false}]
      });
      todonameref.current.value = '';

    }
     
  }
  const clear = () =>{
    const newTodos = todo.filter(todo => !todo.complete)
    setTodo(newTodos)
  }
  return (
    <>
    <TodoList todo={todo} toggleTodo={toggleTodo}/>
    <input ref={todonameref} type="text"/>
    <button onClick={setter}>Add Todo</button>
    <button onClick={clear}>Clear Completed</button>
    <p>{todo.filter(todo=> !todo.complete).length}</p>
    </>
  );
}

export default App;