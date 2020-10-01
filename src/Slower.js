/**
 * Example from https://youtu.be/THL1OPn72vo?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h
 * This componet uses useMemo to store information, and only re-render is has changed.
 */

 import React, { useState, useMemo } from 'react'
 
 
 export default function Slower() {
   const  [number, setNumber] = useState(0)
   const [dark, setDark] = useState(false)
   // this function is called every time the page is render, that is why is so slow to display. 
  //  this is very expensive, so I should change to useMemo
   const doubleNumber = slowFunction(number)
   const themeStyles = {
     backgroundColor : dark ? 'black' : 'white',
     color : dark ? 'white' : 'black'
   }
   return (
     <>
      <div>
        <h1> useMemo example.</h1>
        <br></br><br></br>
        <input type="number" value={number} onChange={e => {setNumber(parseInt(e.target.value) )} }></input>
        <button onClick={() => setDark(prevDark => !prevDark) }> Change Theme </button>
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