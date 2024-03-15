import { useContext } from "react"
import { FieldContext } from "../contexts"
import { IField } from "@my-rx-darg/fieldy"

export function useField() {
  const field = useContext<IField | undefined>(FieldContext)
  return field
}