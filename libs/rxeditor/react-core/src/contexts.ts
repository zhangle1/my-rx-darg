import { createContext } from "react";
import { ICanvasConfig } from "./interfaces";
import { IDesignerEngine, IDocument, ITreeNode } from "@my-rx-darg/core";
import { IReactComponents } from "@my-rx-darg/react-share";

export const DesignerEngineContext = createContext<IDesignerEngine | undefined>(undefined)
export const CanvasConfigContext = createContext<ICanvasConfig | undefined>(undefined)
export const InIframeContext = createContext<boolean | undefined>(undefined)
export const ParamsContext = createContext<unknown | undefined>(undefined)
//IFrame中的Component不能跟engine中一套，所以必须要单独处理
export const ComponentDesignersContext = createContext<IReactComponents>({})
export const DocumentContext = createContext<IDocument | undefined>(undefined)
export const NodeContext = createContext<ITreeNode | undefined>(undefined)
export const LockContext = createContext<boolean | undefined>(undefined)


