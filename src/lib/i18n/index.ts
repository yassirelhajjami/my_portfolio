import { ar } from "./ar"
import { en, type Dict } from "./en"

export const dictionaries = { en, ar } satisfies Record<string, Dict>

export type Lang = keyof typeof dictionaries
export type { Dict }

export const langs = Object.keys(dictionaries) as Lang[]

export function isLang(value: string): value is Lang {
  return value in dictionaries
}
