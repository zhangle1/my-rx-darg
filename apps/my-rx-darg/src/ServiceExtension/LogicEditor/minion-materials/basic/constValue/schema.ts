import { INodeSchema } from "@my-rx-darg/schema";
import { labelSchema } from "../../baseSchema";

export const constValueSchema: INodeSchema = {
  componentName: "Fragment",
  children: [
    labelSchema,
    {
      componentName: "FormItem",
      props: {
        label: "$value",
      },
      children: [
        {
          componentName: "ValueInput",
          "x-data": {
            name: `config.value`,
            params: {
              withBind: true,
            }
          },
        }
      ]
    },
  ],
}