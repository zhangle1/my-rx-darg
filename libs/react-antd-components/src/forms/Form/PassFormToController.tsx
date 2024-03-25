
import { useForm } from "@my-rx-darg/fieldy-react"
import { useComponentSchema, useController } from "@my-rx-darg/react-runner"
import { useEffect } from "react"

export const PassFormToController = () => {
  const schema = useComponentSchema()
  const form = useForm()
  const controller = useController()
  useEffect(() => {
    if (controller && schema?.["x-controller"]?.enable ) {
      controller.fieldyNode = form
    }
  }, [controller, form, schema])
  return undefined
}