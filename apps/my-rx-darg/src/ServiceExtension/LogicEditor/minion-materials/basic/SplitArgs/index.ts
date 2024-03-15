import { splitArgsSchema } from "./schema";
import { ReactNode } from "react";
import { argsIcon } from "../../icons";
import { IActivityMaterial, NodeType } from "@my-rx-darg/minions-schema";
import { createId } from "@my-rx-darg/share";

export const splitArgsMaterial: IActivityMaterial<ReactNode> = {
  icon: argsIcon,
  label: "$splitArgs",
  activityType: NodeType.Activity,
  defaultPorts: {
    inPorts: [
      {
        id: createId(),
        name: "input",
        label: "",
      },
    ],
    outPorts: [
      {
        id: createId(),
        name: "output1",
        label: "output1",
      },
      {
        id: createId(),
        name: "output2",
        label: "output2",
      },
    ],
  },
  schema: splitArgsSchema,
  activityName: "splitObject"
}