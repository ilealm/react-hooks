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
  const [darkTheme, setDarkTheme] = useState(true)

  function toggleTheme(){
    // I NEED TO USE AN ARROW FUN. TO GET THE ORIGNAL STATE. WHATEVER I PUT HERE AS PARAMETER, WILL GET THE VALUE OF THE ORIGINAL STATE, AND
    // I CAN SAY THIS IS MY PREVIOUS STATE BC IM GOING TO CHANGE IT 
    // prevDarkTheme will take the CURRENT value of darkTheme (but now, it will become the prev)
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
