import { THEMES, type Theme } from "../types";

export function isTheme(x: unknown): x is Theme {
    return typeof x === "string" && (THEMES as readonly string[]).includes(x)
}