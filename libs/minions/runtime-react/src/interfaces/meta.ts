//控制器变量定义
export interface IVariableDefineMeta{

  //变量标识
  id: string;
  //变量名称
  name: string;
  //变量默认值
  defaultValue?: unknown;
}

export enum ControllerScopeType{
    array ="array",
    tree ="tree",
}

export interface IControllerMeta{

    id: string;

    name?: string;

    enable?: boolean;

    scopeType?: ControllerScopeType
}