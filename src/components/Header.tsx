import { SunMedium, Moon, MonitorCog } from 'lucide-react'
import type { Theme } from '../types'

type HeaderProps = {
    theme: Theme,
    onThemeClick: (newTheme: Theme) => void
}
export default function Header({theme, onThemeClick} : HeaderProps) {
    return (
        <header>
            <button onClick={() => onThemeClick("dark")} aria-label="Dark theme" aria-pressed={theme === "dark"}> <Moon aria-hidden="true" /> </button>
            <button onClick={() => onThemeClick("light")} aria-label="Light theme" aria-pressed={theme === "light"}> <SunMedium aria-hidden="true" /> </button>
            <button onClick={() => onThemeClick("system")} aria-label="System theme" aria-pressed={theme === "system"}> <MonitorCog aria-hidden="true" /> </button>
        </header>
    )
}