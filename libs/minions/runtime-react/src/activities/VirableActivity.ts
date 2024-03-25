
import { AbstractActivity } from "@my-rx-darg/minions-runtime-core";
import { IVariableContext, IVariableController } from "../interfaces"
import { INodeDefine } from "@my-rx-darg/minions-schema";

export interface IVariableConfig {
  variable?: string
}

export class VirableActivity extends AbstractActivity<IVariableConfig, IVariableContext> {
  protected variableController: IVariableController;
  constructor(meta: INodeDefine<IVariableConfig>, public context?: IVariableContext) {
    super(meta, context)
    if (!context?.variableController) {
      throw new Error("Can not find varialble controller")
    }

    this.variableController = context.variableController
  }

  destroy = () => {
    //throw new Error("Method not implemented.");
  }
}