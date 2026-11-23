import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import type { Theme } from "./types"

function App() {
  const [theme, setTheme] = useState <Theme> ("light")

  useEffect(() => {
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

  }, [theme])
  
  return (
    <Header theme={theme} onThemeClick={setTheme}/>
  )
}

export default App
