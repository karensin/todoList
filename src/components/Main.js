import React, { useState, useRef, useEffect } from 'react';
import TaskList from './TaskList.js';
import uuidv4 from 'uuid/v4';
import './Main.css';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function Main() {

  const [todos, setTodos] = useState([{ id: 1, name: 'Todo 1', complete: false }])
  const todoNameRef = useRef()

  //to save our todos on the page 
  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, [])

  //any time the array changes, useEffect is called 
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])




  function handleAddTodoOnClick(e) {
    const name = todoNameRef.current.value;
    if (name === "") return

    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
    })

    todoNameRef.current.value = null



  }
  function handleAddTodoOnEnter(e) {
    const name = todoNameRef.current.value;
    if (name === "") return

    if (e.key === "Enter") {
      setTodos(prevTodos => {
        return [...prevTodos, { id: uuidv4(), name: name, complete: false }]
      })
      todoNameRef.current.value = null
    }


  }

  function toggleTodo(id) {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)

  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }
  return (
    <div className="container todolist" >
      <h1 className="title">✓ 𝕄𝕪 𝕋𝕒𝕤𝕜𝕤 </h1>
      <div className="decor"> ◌◌◌✐✎✐✎◌◌◌</div>
      <div className="lefttodos"> {todos.filter(todo => !todo.complete).length} left to do </div>
      <TaskList todos={todos} toggleTodo={toggleTodo} />

      <input ref={todoNameRef} type="text" onKeyPress={handleAddTodoOnEnter} placeholder="I want to..."></input>
      <div className="button">
        <button type="button" onClick={handleAddTodoOnClick} class="btn btn-primary " id="add">Add </button>

      </div>
      <button type="button" class="btn btn-danger" onClick={handleClearTodos} id="delete">  Delete </button>

    </div>
  );

}


export default Main;
