import { ILocalesManager } from "@my-rx-darg/locales"
import { createContext } from "react"

export const LocalesContext = createContext<ILocalesManager | undefined>(undefined)