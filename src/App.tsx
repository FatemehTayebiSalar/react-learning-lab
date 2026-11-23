import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import type { Theme } from "./types"
import { isTheme } from "./utils/guards"

function App() {
  const [theme, setTheme] = useState <Theme> (() => {
    const savedTheme = localStorage.getItem("theme")
    if ( isTheme(savedTheme) ) {
      return savedTheme
    }
    return "light"
  }) 

  useEffect(() => {
    localStorage.setItem( "theme" , theme )
    if (theme !== "system") {
      document.documentElement.setAttribute('data-theme', theme)
      return
    }
    const mediaQuery = window.matchMedia(
    '(prefers-color-scheme: dark)'
    );
    const applySystemTheme = () =>
    document.documentElement.setAttribute('data-theme', mediaQuery.matches? "dark" : "light")  
    
    applySystemTheme()
    mediaQuery.addEventListener( "change" , applySystemTheme )
    return () => mediaQuery.removeEventListener( "change" , applySystemTheme )
  }, [theme])
  
  return (
    <Header theme={theme} onThemeClick={setTheme}/>
  )
}

export default App
