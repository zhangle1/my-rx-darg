import { useMemo, useRef } from "react"
import { useFieldPath } from "../../../hooks/useFieldPath"
import { IYupValidateSchema } from "@my-rx-darg/fieldy-yup-validation"
import { FieldType, IFieldSchema } from "@my-rx-darg/fieldy"

export function useCreateFieldSchema(
  name: string | number,
  type: FieldType | undefined,
  defaultValue: unknown | undefined,
  rules: IYupValidateSchema | undefined,
) {
  const parentPath = useFieldPath() || ""
  const fieldPath = useMemo(() => {
    return parentPath ? parentPath + "." + name : name.toString()
  }, [name, parentPath])

  const fieldPathRef = useRef(fieldPath)
  fieldPathRef.current = fieldPath
  const fieldSchema: IFieldSchema = useMemo(() => {
    return {
      path: fieldPath,
      type: type,
      name,
      defaultValue,
      validateRules: rules,
    }
  }, [defaultValue, fieldPath, name, rules, type])

  return fieldSchema
}