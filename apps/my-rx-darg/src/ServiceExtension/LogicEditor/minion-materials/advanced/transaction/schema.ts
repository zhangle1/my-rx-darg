import { INodeSchema } from "@my-rx-darg/schema";
import { labelSchema } from "../../baseSchema";

export const transactionSchema: INodeSchema = {
  componentName: "Fragment",
  children: [
    labelSchema,
  ],
}