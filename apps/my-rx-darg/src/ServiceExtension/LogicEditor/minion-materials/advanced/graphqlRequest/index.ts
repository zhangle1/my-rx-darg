import { constValueSchema } from "./schema";
import { ReactNode } from "react";
import { graphqlRequestIcon } from "../../icons";
import { DEFAULT_INPUT_NAME, DEFAULT_OUTPUT_NAME } from "../../consts";
import { IActivityMaterial, NodeType } from "@my-rx-darg/minions-schema";
import { createId } from "@my-rx-darg/share";

export const graphqlRequestMaterial: IActivityMaterial<ReactNode> = {
  activityName: "graphqlRequest",
  icon: graphqlRequestIcon,
  label: "$graphqlRequest",
  activityType: NodeType.Activity,
  color: "#e10098",
  defaultPorts: {
    inPorts: [
      {
        id: createId(),
        name: DEFAULT_INPUT_NAME,
        label: "",
      },
    ],
    outPorts: [
      {
        id: createId(),
        name: DEFAULT_OUTPUT_NAME,
        label: "",
      },
    ],
  },
  schema: constValueSchema,
}