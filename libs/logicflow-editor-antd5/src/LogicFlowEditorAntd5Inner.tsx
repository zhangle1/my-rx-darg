import { ILogicMetas } from "@my-rx-darg/minions-logicflow-editor";
import { ActivityMaterialCategory, ILogicFlowDefine } from "@my-rx-darg/minions-schema";
import { IReactComponents } from "@my-rx-darg/react-share";
import { CSSProperties, memo, ReactNode } from "react";
import { LogicFlowEditorInner } from "./components/LogicFlowEditorInner";
import { FlowToolbar, Toolbox } from "./components";
import { MiniToolbar } from "./components/MiniToolbar";
import { PropertyBox } from "./components/PropertyBox";

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
            <LogicFlowEditorInner
            value={value}
            onChange={onChange}
            toolbar={toolbar === undefined ? <FlowToolbar /> : toolbar}
            toolbox={toolbox !== false && (toolbox || <Toolbox materialCategories={materialCategories} />)}
            propertyBox={<PropertyBox setters={setters} />}

            {...rest}
            >
                          <MiniToolbar />
            </LogicFlowEditorInner>
            )
    })