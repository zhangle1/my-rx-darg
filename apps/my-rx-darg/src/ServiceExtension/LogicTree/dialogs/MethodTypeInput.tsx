import React from "react";
import { Form } from "antd";
import { memo } from "react";
import { IExtension } from "../../../interfaces/extension";
import { TypeSelect } from "./TypeSelect";
import { TypeUuidSelect } from "./TypeUuidSelect";
import { useTranslate } from "@my-rx-darg/locales-react";

export const MethodTypeInput = memo(
  (
    props: {
      method: IExtension
    }
  ) => {
    const { method } = props;
    const  t  = useTranslate();

    return (
      <>
        <Form.Item
          label={t("ReturnType")}
          name="type"
        >
          <TypeSelect></TypeSelect>
        </Form.Item>
        <TypeUuidSelect type={method.type} withFormItem />
      </>
    );
  }
);
