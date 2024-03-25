import { INodeDefine } from "@my-rx-darg/minions-schema";
import { IVariableContext } from "../../interfaces";
import { IVariableConfig, VirableActivity } from "../VirableActivity";
import { Input } from "antd";

@Activity(ReadVariable.NAME)
export class ReadVariable extends VirableActivity {
  public static NAME = "system-react.readVariable"

  constructor(meta: INodeDefine<IVariableConfig>, context?: IVariableContext) {
    super(meta, context)

    if (Object.keys(meta.inPorts || {}).length !== 1) {
      throw new Error("ReadVariable inputs count error")
    }
  }

  @Input()
  inputHandler = (_: unknown, runContext?: object) => {
    if (this.meta.config?.variable) {
      this.next(this.variableController.getVariable(this.meta.config.variable), runContext)
    }
  }
}
