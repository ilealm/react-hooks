/**
 * Example from https://youtu.be/THL1OPn72vo?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h
 * This componet uses useMemo to store information, and only re-render is has changed.
 */

 import React, { useState, useMemo } from 'react'
 
 
 export default function Slower() {
  const  [number, setNumber] = useState(0)
  const [dark, setDark] = useState(true)
  // this function is called every time the page is render, that is why is so slow to display. 
  // Is all slow BS is rerendering all. Even the black div
  //  this is very expensive, so I should change to useMemo, so I cach the input. When the input num changes, then
  // the fun will be called again
  //  const doubleNumber = slowFunction(number)
  // with this, onky when number changes (the one declared on the depencies) change, slowFunction will be called
  // the btn now don't have the delay
  // DONT abuse memo, bc consumes memory and is a call for a function
  // when dependencies changes is when the rerender is called
   const doubleNumber = useMemo(() => {
     return slowFunction(number) 
    } ,[number] ) // list of dependecies. when this changes, then the function is called. 

   const themeStyles = {
     backgroundColor : dark ? 'black' : 'white',
     color : dark ? 'white' : 'black'
   }
   return (
     <>
      <div>
        {/* <h1> useMemo example.</h1> */}
        <br></br><br></br>
        <span> Enter a number and wait to see the delay.... </span>
        <br></br>
        <input type="number" value={number} onChange={e => {setNumber(parseInt(e.target.value) )} }></input>
        <br></br>
        <button onClick={() => setDark(prevDark => !prevDark) }> Change Theme, I dont have delay </button>
        <div style={themeStyles}> {doubleNumber} </div>
      </div>
     </>
   )
 }
 
 function slowFunction(num){
   console.log('Calling slow function')
  //  this fun. creates a delay doing nothing
  for (let i=0; i <= 1000000000; i++) {}
  return num * 10 //just to return something
 }