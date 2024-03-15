import { splitArraySchema } from "./schema";
import { ReactNode } from "react";
import { splitArrayIcon } from "../../icons";
import { IActivityMaterial, NodeType } from "@my-rx-darg/minions-schema";
import { createId } from "@my-rx-darg/share";

export const splitArrayMaterial: IActivityMaterial<ReactNode> = {
  icon: splitArrayIcon,
  label: "$splitArray",
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
  schema: splitArraySchema,
  activityName: "splitArray"
}