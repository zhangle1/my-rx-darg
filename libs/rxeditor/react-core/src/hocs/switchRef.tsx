/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react"
import { forwardRef, memo, useCallback } from "react"
import { Callback, defaultCallback } from "./types"
import { ReactComponent } from "@my-rx-darg/react-share"
import { isFn } from "@my-rx-darg/share"

export function switchRef(WrappedComponent: ReactComponent, callback: Callback = defaultCallback): ReactComponent {

  return memo(forwardRef<HTMLElement>((props: any, ref) => {
    const handleRefChange = useCallback((element: HTMLElement | null) => {
      if (isFn(ref)) {
        ref(callback(element) as any || null)
      } 
    }, [ref])

    return <WrappedComponent ref={handleRefChange} {...props} />
  }))
}
