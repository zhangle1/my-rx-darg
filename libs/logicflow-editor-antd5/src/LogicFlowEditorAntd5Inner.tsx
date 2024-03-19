import { ILogicMetas } from "@my-rx-darg/minions-logicflow-editor";
import { ActivityMaterialCategory, ILogicFlowDefine } from "@my-rx-darg/minions-schema";
import { IReactComponents } from "@my-rx-darg/react-share";
import { CSSProperties, memo, ReactNode } from "react";

export type LogicFlowEditorAntd5InnerProps = {
    value: ILogicMetas,
    onChange?: (value: ILogicMetas) => void,
    materialCategories: ActivityMaterialCategory<ReactNode>[],
    setters?: IReactComponents,
    logicFlowContext?: unknown,
    fxFlowMetas?: ILogicFlowDefine[],
    toolbar?: false | React.ReactNode,
    toolbox?: React.ReactNode | false,
    style?: CSSProperties,
    className?: string,
  }
  

  export const LogicMetaEditorAntd5Inner = memo((
    props: LogicFlowEditorAntd5InnerProps
    ) =>{
        const { value, onChange, materialCategories, setters, toolbar, toolbox, ...rest } = props
        return (
            <LogicFlowEditorInner>


                
            </LogicFlowEditorInner>
            )
    })