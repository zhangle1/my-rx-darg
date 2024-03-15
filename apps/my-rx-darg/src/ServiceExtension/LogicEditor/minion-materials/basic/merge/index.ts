import { mergeSchema } from "./schema";
import { mergeIcon } from "../../icons";
import { IRxDragActivityMaterial } from "@my-rx-darg/minions-react-materials";
import { NodeType } from "@my-rx-darg/minions-schema";
import { createId } from "@my-rx-darg/share";

export const mergeMaterial: IRxDragActivityMaterial = {
  icon: mergeIcon,
  label: "$merge",
  activityType: NodeType.Activity,
  defaultPorts: {
    inPorts: [
      {
        id: createId(),
        name: "input0",
        label: "input 0",
      },
      {
        id: createId(),
        name: "input1",
        label: "input 1",
      },
    ],
    outPorts: [
      {
        id: createId(),
        name: "output",
        label: "",//"$output",
      },
    ],
  },
  schema: mergeSchema,
  activityName: "merge",
}