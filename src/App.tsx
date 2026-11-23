import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import type { Theme } from "./types"

function App() {
  const [theme, setTheme] = useState <Theme> ("light")

  useEffect(() => {
    let resolvedTheme = theme
    if (theme === "system") {
      const mediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
      );
      resolvedTheme = mediaQuery.matches
        ? "dark"
        : "light";
    }
    document.documentElement.setAttribute('data-theme', resolvedTheme)
  }, [theme])
  
  return (
    <Header theme={theme} onThemeClick={setTheme}/>
  )
}

export default App
