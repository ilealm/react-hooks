/**
 * Example based on https://youtu.be/t2ypzz6gJm0
 * useRef
 */

import React, { useState, useEffect, useRef } from 'react';

export default function UsedToBe() {
  const [name, setName] = useState('')
  const previousName = useRef('')

  useEffect(() => {
    previousName.current = name
  },[name])

  return (
    <>
      <div>
          <h1> Used to be Exampe using useRef</h1>
          <input value={name} onChange={e => setName(e.target.value)}></input>
          <div>Current text {name} and it used to be {previousName.current}</div>
      </div>
      <br></br> <br></br>
    </>
  )
}
