import { conditionSchema } from "./schema";
import { ReactNode } from "react";
import { ifIcon } from "../../icons";
import { IActivityMaterial, NodeType } from "@my-rx-darg/minions-schema";
import { createId } from "@my-rx-darg/share";

export const conditionMaterial: IActivityMaterial<ReactNode> = {
  icon: ifIcon,
  label: "$conditionCheck",
  activityType: NodeType.Activity,
  color: "#5e76c3",
  defaultPorts: {
    inPorts: [
      {
        id: createId(),
        name: "input",
        label: "",//"$inputCondition",
      },
    ],
    outPorts: [
      {
        id: createId(),
        name: "true",
        label: "$true",
      },
      {
        id: createId(),
        name: "false",
        label: "$false",
      },
    ],
  },
  schema: conditionSchema,
  activityName: "condition"
}