import { constValueSchema } from "./schema";
import { ReactNode } from "react";
import { fixedValueIcon } from "../../icons";
import { DEFAULT_INPUT_NAME, DEFAULT_OUTPUT_NAME } from "../../consts";
import { IActivityMaterial, NodeType } from "@my-rx-darg/minions-schema";
import { createId } from "@my-rx-darg/share";

export const constValueMaterial: IActivityMaterial<ReactNode> = {
  activityName: "constValue",
  icon: fixedValueIcon,
  label: "$fixedValue",
  activityType: NodeType.Activity,
  color: "#1668dc",
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