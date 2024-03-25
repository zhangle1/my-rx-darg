import { AbstractActivity, Activity, ILogicScopeContext, Input } from "@my-rx-darg/minions-runtime-core";
import { IControllerConfig } from "../ControllerActivity";
import { INodeDefine } from "@my-rx-darg/minions-schema";

//未实现
@Activity(ReadRow.NAME)
export class ReadRow extends AbstractActivity<unknown, ILogicScopeContext> {
  public static NAME = "system-react.readArrayRow"

  constructor(meta: INodeDefine<IControllerConfig>, context?: ILogicScopeContext) {
    super(meta, context)

    if (Object.keys(meta.inPorts || {}).length !== 1) {
      throw new Error("ReadVariable inputs count error")
    }
  }

  @Input()
  inputHandler = (_: unknown, runContext?: object) => {
    this.next(this.context?.logicScope?.value, runContext)
  }
}
