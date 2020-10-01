/**
 * cmmb->
 *  Code based from https://youtu.be/0ZJgIjIuY7U
 */
//  
// React Hooks Playground
// imrse->
import React, { useState, useEffect } from 'react';

// rfc->
export default function App() {
  const [resourceType, setResourceType] = useState('users')
  const [items, setItems] = useState([])

  console.log('render from the function')  

  // the next code executes every time the app renders 
  useEffect(()=> {    
    console.log('render from useEffect')  

    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
      // .then(json => console.log(json))


    // clean up component after the unMount
    return () => {
      console.log('Return from resource change. The pressed buttom is different.')
    }

    } , [resourceType] )  //all the values I pass here are the ones that will render when the value changes.
    // if the resourceType is the same already render, it WON'T re-render. (eg. pushing the same button) This is more efficient
    // if the array is empty, is like onMount, and only renders once





  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}> Post </button>
        <button onClick={() => setResourceType('users')}> Users </button>
        <button onClick={() => setResourceType('comments')}> Comments </button>
      </div>
      <h1> Example using useEffect, and fetching to jsonplaceholder</h1>
      <h3>        
        The current resource is {resourceType}
      </h3>
      { items.map(item => {
        return <pre>{JSON.stringify(item)}</pre>
      })

      }
    </>
  )
}
