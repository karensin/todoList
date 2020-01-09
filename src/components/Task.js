import React from 'react';
import './Task.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Task ({ todo, toggleTodo}) {
    function handleTodoClick(){
        toggleTodo(todo.id)
    }
    return (
      <div className="task">
        <label> 
            <input type= "checkbox" checked={todo.complete} onChange={handleTodoClick} /> 
        
          {todo.name}
          </label>
      </div>
    )
  }
  //everytime you click, it calls 'onchange()', toggleTodo and todo.id will get passed in 
  //from Todolist, which then calls toggleTodo () in Main.js which will then reset our todoList variable 
  //to newlist of todos (newTodos) with the todo check we clicked on. resulting in the check box and saving the it to the local storage and remains on the page 