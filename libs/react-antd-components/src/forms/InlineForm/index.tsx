import { FormProps } from "antd"
import { memo } from "react"

import { withContainerLayout } from "../../hocs";
import { DisplayProps } from "../types";
import { FormLayout } from "../FormLayout";
import { FormValue } from "@my-rx-darg/fieldy";
import { useFieldValue } from "@my-rx-darg/fieldy-react";

const InlineFormImpl = memo((
  props: {
    initialValue?: FormValue,
    defaultValue?: FormValue,
    children?: React.ReactNode,
    onChange?: (value?: FormValue) => void,
  } & FormProps & DisplayProps
) => {
  const { children, ...other } = props;
  const value = useFieldValue();

  return (
    <FormLayout initialValue={value as FormValue | undefined} {...other}>
      {children}
    </FormLayout>
  )
})

export const InlineForm = withContainerLayout(InlineFormImpl)