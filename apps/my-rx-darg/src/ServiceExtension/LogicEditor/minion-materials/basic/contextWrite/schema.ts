import { INodeSchema } from "@my-rx-darg/schema";
import { labelSchema } from "../../baseSchema";

export const contextWriteSchema: INodeSchema = {
  componentName: "Fragment",
  children: [
    labelSchema,
    {
      componentName: "FormItem",
      props: {
        label: "$name",
      },
      children: [
        {
          componentName: "Input",
          "x-data": {
            name: `config.name`,
            params: {
              withBind: true,
            }
          },
        }
      ]
    }
  ],
}