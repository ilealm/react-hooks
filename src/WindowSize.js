/**
 * cmmb->
 *  Code based from https://youtu.be/0ZJgIjIuY7U
 */
//  
// React Hooks Playground
// imrse->
import React, { useState, useEffect } from 'react';


// rfc->
function WindowSize() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() =>{
    window.addEventListener('resize', handleResize)

    // this is a clean up the effect. This is more efficient. 
    // this return will be called on component's unMount
    // so the event lister is no readded everytime
    return () => {
      window.removeEventListener('resize', handleResize)
    }

  },[]) // I just want this to happend on onMount

  return (
    <>
      <div>
        <h1>
          Window Size useEffect, adding a listener
        </h1>
        <h3>The current window with is {windowWidth}. Please resize to see changes.</h3>
      </div>
    </>
  )
}

export default WindowSize
