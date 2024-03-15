import { FieldType } from "@my-rx-darg/fieldy";
import { IYupValidateSchema } from "@my-rx-darg/fieldy-yup-validation";
import { useCreateFieldSchema } from "../XField/hooks/useCreateFieldSchema";
import { XField } from "../XField";

//动态增加字段用这个，否则不要碰它
export const Field = (
    props: {
      //数组时会使用number
      name: string | number,
      initialValue?: unknown,
      value?: unknown,
      defaultValue?: unknown,
      children?: React.ReactNode,
      type?: FieldType,
      rules?: IYupValidateSchema,
    }
  ) => {
    const { name, value, initialValue, defaultValue, children, type, rules } = props
    const fieldMeta = useCreateFieldSchema(name, type, defaultValue, rules)
  
    return (
      <XField fieldMeta={fieldMeta} initialValue={initialValue} value={value}>
        {children}
      </XField>
    )
  }