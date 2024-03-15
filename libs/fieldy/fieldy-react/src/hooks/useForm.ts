
import { useContext } from "react"
import { FormContext } from "../contexts"
import { IForm } from "@my-rx-darg/fieldy"

export function useForm() {
  const form = useContext<IForm | undefined>(FormContext)
  return form
}