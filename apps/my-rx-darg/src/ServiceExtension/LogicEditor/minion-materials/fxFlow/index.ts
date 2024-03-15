import { IRxDragActivityMaterial } from "@my-rx-darg/minions-react-materials"
import { ILogicFlowContext } from "../../contexts"
import { NodeType } from "@my-rx-darg/minions-schema"
import { methodIcon } from "@my-rx-darg/react-share"


export interface IFxFlowConfig {
  fxId?: string
}
export const fxFlowMaterial: IRxDragActivityMaterial<IFxFlowConfig, ILogicFlowContext> = {
  activityName: "fxFlow",
  label: "$fxFlow",
  icon: methodIcon,
  color: "#58c622",
  activityType: NodeType.LogicFlowActivity,
  defaultPorts: {
  },

  title: (config?: IFxFlowConfig, context?: ILogicFlowContext) => {
    const fx = context?.fxFlowMetas?.find(fx => config?.fxId === fx.id)
    return fx?.name || fx?.id
  },

}
