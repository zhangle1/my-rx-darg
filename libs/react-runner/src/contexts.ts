import { createContext } from "react";
import { IComponentRenderSchema } from "./ComponentView";

import { ControllerEngine } from "./LogicflowRuntime/ControllerEngine";
import { IReactComponents } from "@my-rx-darg/react-share";
import { IController } from "@my-rx-darg/minions-runtime-react";

export const PreviewComponentsContext = createContext<IReactComponents>({})
export const ComponentSchemaContext = createContext<IComponentRenderSchema | undefined>(undefined)
export const ControllerContext = createContext<IController | undefined>(undefined)
export const ControllerEngineContext = createContext<ControllerEngine | undefined>(undefined)
