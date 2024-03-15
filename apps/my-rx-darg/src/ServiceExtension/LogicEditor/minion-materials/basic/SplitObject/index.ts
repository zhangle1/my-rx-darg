import { splitObjectSchema } from "./schema";
import { ReactNode } from "react";
import { splitObjectIcon } from "../../icons";
import { IActivityMaterial, NodeType } from "@my-rx-darg/minions-schema";
import { createId } from "@my-rx-darg/share";

export const splitObjectMaterial: IActivityMaterial<ReactNode> = {
  icon: splitObjectIcon,
  label: "$splitObject",
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
  schema: splitObjectSchema,
  activityName: "splitObject"
}