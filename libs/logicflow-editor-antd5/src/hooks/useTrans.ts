import { useTranslate } from "@my-rx-darg/locales-react";
import { useCallback } from "react"

export function useTrans() {
  const t = useTranslate();
  const trans = useCallback((message?: string) => {
    if (message?.startsWith('$')) {
      return t(message?.substring(1))
    }
    return message
  }, [t])

  return trans
}