import { INodeDefine } from "@my-rx-darg/minions-schema";
import { IReactContext } from "../../interfaces";
import { ControllerActivity } from "../ControllerActivity";
import { IPropConfig } from "./SetProp";
import { Activity } from "@my-rx-darg/minions-runtime-core";

@Activity(ListenProp.NAME)
export class ListenProp extends ControllerActivity<IPropConfig> {
  public static NAME = "system-react.listenProp"

  constructor(meta: INodeDefine<IPropConfig>, context: IReactContext) {
    super(meta, context)

    if (meta.config?.prop) {
      this.controller?.subscribeToPropChange(meta.config?.prop, this.valueHandler)
    } else {
      console.error("Not set Prop to ListenPropReaction")
    }
  }

  valueHandler = (inputValue: unknown) => {
    if (this.meta.config?.prop) {
      this.next(inputValue, {})
    }
  }
}
