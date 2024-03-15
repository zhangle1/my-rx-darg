
import { IDesignerEngine } from "@my-rx-darg/core";
import { IActivityMaterial, ILogicFlowDefine, IVariable } from "@my-rx-darg/minions-schema";
import { INodeSchema } from "@my-rx-darg/schema";
import { ReactNode } from "react";

export type LogicflowContextParam = {
  engine?: IDesignerEngine,
  variables?: IVariable[],
  fxFlowMetas?: ILogicFlowDefine[],
  t?: (key: string) => string,
}

export type IRxDragActivityMaterial<SetPropConfig = unknown, MaterialContext = unknown> = IActivityMaterial<ReactNode, INodeSchema, SetPropConfig, MaterialContext>