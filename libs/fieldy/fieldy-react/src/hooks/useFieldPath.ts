import { IField } from "@my-rx-darg/fieldy"
import { FieldContext } from "../contexts"
import { useContext } from "react"

export function useFieldPath(){
  const fieldPath = useContext<IField|undefined>(FieldContext)?.path

  return fieldPath
}