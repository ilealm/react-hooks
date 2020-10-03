import React, { useState, useContext } from 'react'

const ThemeContext = React.createContext()  //here, i can send a default value (eg. true/false)
const ThemeUpdateContext = React.createContext()  // in the video, he has to add this BC "failed to complile"

export function useTheme(){
  return useContext(ThemeContext)
}  

export function useThemeUpdate(){
  return useContext(ThemeUpdateContext)
}

export function ThemeProvider({ children }) {
  // export default function ThemeProvider({ children }) {
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme(){
    setDarkTheme(prevDarkTheme => !prevDarkTheme)
  }

return (
  <ThemeContext.Provider value = {darkTheme}>    
    <ThemeUpdateContext.Provider value={toggleTheme}>  {/* toggleTheme is the update function */}
      { children }
    </ThemeUpdateContext.Provider>
  </ThemeContext.Provider>
)
}
