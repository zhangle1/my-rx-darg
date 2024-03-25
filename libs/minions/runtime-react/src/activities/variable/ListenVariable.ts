import { INodeDefine } from "@my-rx-darg/minions-schema";
import { IVariableContext } from "../../interfaces";
import { IVariableConfig, VirableActivity } from "../VirableActivity";
import { Activity } from "@my-rx-darg/minions-runtime-core";

@Activity(ListenVariable.NAME)
export class ListenVariable extends VirableActivity {
  public static NAME = "system-react.listenVariable"

  constructor(meta: INodeDefine<IVariableConfig>, context?: IVariableContext) {
    super(meta, context)

    if (Object.keys(meta.outPorts || {}).length !== 1) {
      throw new Error("ListenVariable outputs count error")
    }

    if (meta.config?.variable) {
      this.variableController?.subscribeToVariableChange(meta.config.variable, this.valueHandler)
    } else {
      console.error("Not set variable to ListenVariableReaction")
    }
  }

  init = () => {
    if (this.meta.config?.variable) {
      this.next(this.variableController.getVariable(this?.meta.config.variable), {})
    }
  }

  valueHandler = (inputValue: unknown) => {
    if (this.meta.config?.variable) {
      this.next(inputValue, {})
    }
  }
}
