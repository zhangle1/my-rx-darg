import { ReactComponent } from "@my-rx-darg/react-share"
import { isFn } from "@my-rx-darg/share"
import React from "react"
import { forwardRef, memo, useCallback } from "react"
import styled from "styled-components"

const HiddenElement = styled.div`
  display: none;
`

export function forwardRefByChildren(WrappedComponent: ReactComponent): ReactComponent {

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return memo(forwardRef<HTMLElement>((props: any, ref) => {
    const { children, ...rest } = props
    const handleRefChange = useCallback((element: HTMLElement | null) => {
      if (isFn(ref)) {
        ref(element?.parentElement||null)
      }
    }, [ref])

    return <WrappedComponent {...rest}>
      {children}
      <HiddenElement ref={handleRefChange} />
    </WrappedComponent>
  }))
}
