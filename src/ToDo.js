/**
 * Example based from https://youtu.be/kK_Wqx3RnHk
 */

import React, { useState, useReducer } from 'react';
import Task from './Task'

// i'm expoting them so I can use them at Tasks.
export const ACTIONS = {
  ADD_TODO : 'add-todo',
  TOGGLE_TODO : 'toggle-todo',  // action for completing or uncompleting todo
  DELETE_TODO : 'delete-todo'  // action for completing or uncompleting todo
}

// the toDos is insted of state
// all the actions I want to do are inside my reducer function
function reducer(toDos, action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      // [...toDos] are the current todos, so I need to add the new one
      return [...toDos, newToDo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      // mark complete or not complete
      // take all current todos, and map over them to get a new list of todos, and take the current todo and toggle it
      return toDos.map(todo => {
        if (todo.id === action.payload.id) {
          // I want a new todo that is complete
          return { ...todo, complete: !todo.complete}
        }
        return todo //is not the current one, so I don't need to change anything
      })
    case ACTIONS.DELETE_TODO:
        // take all the current todos, filter them and remove the todo I don't want
        return toDos.filter(todo => todo.id !== action.payload.id) // if the id is the same from payload, then we keep it.
    default:
      return toDos
      }
}
    
    
function newToDo(name){
  return {id: Date.now(), name:name, complete: false}
}

export default function ToDo() {
  const [toDos, dispatch] = useReducer(reducer,[])
  const [name, setName] = useState('')

  // this fun. adds a new todo
  function handleSubmit(e){
    // we don't want to refresh all the page, so add this
    e.preventDefault()

    // payload is a way to pass variables. are the params for the actions to be perfomed at reducer
    dispatch({type: ACTIONS.ADD_TODO, payload: {name:name} })
    // clear
    setName('')
  }  
  console.log(toDos)
  return (
    <>      
      <div>
        <h1>To Do List implementing useRef. Toggle complete status</h1>
        <form onSubmit={handleSubmit}>          
          <input type="text" value={name} onChange={e => setName(e.target.value)}/> Type and then enter
        </form>     
        <h2>To Do List</h2>  
        {toDos.map(one_todo =>{
          // here, the dispatch handles all the use cases (handleClick, handleEdit, handleDelete...)
          return  <Task key={one_todo.id} todo={one_todo} dispatch={dispatch} />
        })}
      </div>
    </>
  )
}
