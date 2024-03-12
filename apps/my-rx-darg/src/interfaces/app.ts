import { INodeSchema } from "@my-rx-darg/schema";
import { DeviceType } from "./device";
import { ICanvasConfig } from "@my-rx-darg/react-core";
import { IModuleCategory } from "./module";
import { IMenu } from "./menu";



export interface IApp {
    id: string,
    title?: string,
  }
  
  export interface IAppInput {
    id?: string,
    title?: string,
  }
  
  export interface IAppFrontend {
    app?: IApp,
    deviceType: DeviceType,
    frameSchema?: INodeSchema,
    canvasConfig?: ICanvasConfig,
    menus?: IMenu[],
    moduleCategories?: IModuleCategory[],
  }