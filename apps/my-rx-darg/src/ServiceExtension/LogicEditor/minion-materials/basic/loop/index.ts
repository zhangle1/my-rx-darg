import { loopSchema } from "./schema";
import { loopIcon } from "../../icons";
import { IRxDragActivityMaterial } from "@my-rx-darg/minions-react-materials";
import { NodeType } from "@my-rx-darg/minions-schema";
import { createId } from "@my-rx-darg/share";

export const loopMaterial: IRxDragActivityMaterial = {
  icon: loopIcon,
  label: "$loop",
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
        name: "output",
        label: "",
      },
    ],
  },
  schema: loopSchema,
  activityName: "loop",
}