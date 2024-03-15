import { constValueSchema } from "./schema";
import { ReactNode } from "react";
import { httpRequestIcon } from "../../icons";
import { DEFAULT_INPUT_NAME, DEFAULT_OUTPUT_NAME } from "../../consts";
import { IActivityMaterial, NodeType } from "@my-rx-darg/minions-schema";
import { createId } from "@my-rx-darg/share";

export const httpRequestMaterial: IActivityMaterial<ReactNode> = {
  activityName: "httpRequest",
  icon: httpRequestIcon,
  label: "$httpRequest",
  activityType: NodeType.Activity,
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