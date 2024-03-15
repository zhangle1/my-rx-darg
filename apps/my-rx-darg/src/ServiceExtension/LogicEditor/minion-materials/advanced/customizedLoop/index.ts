import { NodeType } from "@my-rx-darg/minions-schema";
import { customizedLoopIcon } from "../../icons";
import { customizedLoopSchema } from "./schema";
import { IRxDragActivityMaterial } from "@my-rx-darg/minions-react-materials";
import { createId } from "@my-rx-darg/share";

export const customizedLoopMaterial: IRxDragActivityMaterial = {
  icon: customizedLoopIcon,
  label: "$customizedLoop",
  activityType: NodeType.EmbeddedFlow,
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
        label: "$oneOutput",
      },
      {
        id: createId(),
        name: "finished",
        label: "$finished",
      },
    ],
  },
  schema: customizedLoopSchema,
  activityName: "customizedLoop"
}
