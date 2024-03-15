import { INodeSchema } from "@my-rx-darg/schema";
import { labelSchema } from "../../baseSchema";

export const constValueSchema: INodeSchema = {
  componentName: "Fragment",
  children: [
    labelSchema,
  ],
}