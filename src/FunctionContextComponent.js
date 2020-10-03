import React from 'react'
import { useTheme, useThemeUpdate } from './ThemeContext'


export default function FunctionContextComponent() {
  const darkTheme = useTheme()  //this is returning a React.createContext()
  const toggleTheme = useThemeUpdate()  //this is returning a React.createContext()
  const themeStyles = {
      backgroundColor : darkTheme ? '#333' : '#CCC',
      color: darkTheme ? '#CCC' : '#333',
      padding: '2rem',
      margin: '2rem'  }

  return (
    <>
      <button onClick={ toggleTheme }> Toggle Theme  </button> 
      <div style={themeStyles}> Function Theme. I'm in FunctionContextComponent </div>
    </>
  )
}
