import { useEffect, useState } from "react"
import Header from "./components/Header/Header"
import type { Theme } from "./types"

function App() {
  const [theme, setTheme] = useState <Theme> ("light")

  useEffect((() => document.documentElement.setAttribute('data-theme', theme)), [theme])
  
  return (
    <Header theme={theme} onThemeClick={setTheme}/>
  )
}

export default App
