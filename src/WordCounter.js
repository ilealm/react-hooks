
/**
 * useRef Example based on https://youtu.be/t2ypzz6gJm0
 * useRef preserves value state between renders, but it won't make the component to rerender
 * It is better to use useRef to refernce elements inside the html. Each html element have a ref attribute
 */

import React, { useState, useRef } from 'react';

export default function WordCounter() {
  const [name, setName] = useState('')
  // const lettersCounter = useRef(0)
  const inputRef = useRef()

  // useEffect(() => {
    // lettersCounter.current = lettersCounter.current + 1
  // }
  // )

  function focus(){
    inputRef.current.focus()  // send the focus to the textbox
  }

  return (
    <>
      <div>
        <h1> Characters rendered using useRef  </h1>
        <h4> On click, send the focus to the textbox </h4>
        <button onClick={focus} >Focus</button>
        <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
        {/* <div>How many renders {lettersCounter.current} </div> */}
        <div>How many renders {name} </div>
      </div>
      <br></br><br></br>
    </>
  )
}
