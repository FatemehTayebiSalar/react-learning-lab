import { useState } from "react"
import Header from "./components/Header"
import type { Theme } from "./types"

function App() {
  const [theme, setTheme] = useState <Theme> ("light")
  console.log(theme)
  return (
    <Header theme={theme} onThemeClick={setTheme}/>
  )
}

export default App
