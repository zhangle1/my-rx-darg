import { contextWriteSchema } from "./schema";
import { contextWriteIcon } from "../../icons";
import { DEFAULT_INPUT_NAME, DEFAULT_OUTPUT_NAME } from "../../consts";
import { IRxDragActivityMaterial } from "@my-rx-darg/minions-react-materials";
import { NodeType } from "@my-rx-darg/minions-schema";
import { createId } from "@my-rx-darg/share";

export interface IContextVariableConfig {
  name?: string,
}
export const contextWriteMaterial: IRxDragActivityMaterial<IContextVariableConfig> = {
  activityName: "contextWrite",
  icon: contextWriteIcon,
  label: "$contextWrite",
  activityType: NodeType.Activity,
  defaultPorts: {
    inPorts: [
      {
        id: createId(),
        name: DEFAULT_INPUT_NAME,
        label: "input",
      },
      {
        id: createId(),
        name: "value",
        label: "$value",
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
  schema: contextWriteSchema,
  subTitle: (config?: IContextVariableConfig) => {
    return config?.name
  },
}