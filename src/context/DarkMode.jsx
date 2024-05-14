import { createContext, useState } from "react";

const DarkModeContext = createContext()

function DarkModeContextProvider({ children }){
   const [isDarkMode, setIsDarkMode] = useState(false)
   const html = document.getElementById('html')

   function darkToggle(){
      setIsDarkMode(!isDarkMode)
      html.classList.toggle('dark')
   }

   return (
      <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode, darkToggle}}>
         {children}
      </DarkModeContext.Provider>
   )
}

export const DarkMode = DarkModeContext
export default DarkModeContextProvider