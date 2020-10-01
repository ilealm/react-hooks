/**
 * Example based on https://youtu.be/kK_Wqx3RnHk
 * using useReducer
 */

import React, { useState, useReducer } from 'react';

// to avoid hard code
const ACTIONS = {
  INCREMENT: 'increment',
  DECREMENT: 'decrement'
}

// I could put reducer function here (as in the video)

export default function IncrementDecrement() {
  // fun that receives the current state and an action
  // the actions are the ones that I can perform over my state
  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.INCREMENT:
        return { count: state.count + 1 }
      case ACTIONS.DECREMENT:
        return { count: state.count - 1 }
      default:
        return state
    }
  }
  
  // useReducer:
  // Param1 is a function(reducer) to perform on state to get a new state. 
  // Param2 initial state. USUALY is an object
  // returns an array. 1st portion is the state, 2nd: function called dispatch (called funtion to upd the state) Basically call reducer funtion
  // with some params
  const [state, dispatch] = useReducer(reducer, {count:0})  


  function increment(){
    dispatch({type: ACTIONS.INCREMENT})
  }

  function decrement(){
    dispatch({type: ACTIONS.DECREMENT})
  }

  return (
    <>
    <div>
      <h1> Increment and Decrement using useReducer </h1>
    </div>
    <button onClick={decrement}>-</button>
    <span> {state.count} </span>
    <button onClick={increment}>+</button>
  </>
  )
}
 