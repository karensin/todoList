import React from 'react'
import Task from './Task'


export default function TaskList({todos, toggleTodo}) {
    const list=  todos.slice().reverse().map(todo => {
        return <Task key={todo.id} toggleTodo={toggleTodo} todo= {todo} /> 
    })
    return (  
    
    <div className= "list"> {list} </div>
    )
}
