import { ResizableColumn } from "@my-rx-darg/react-share";
import { ID } from "@my-rx-darg/share";
import { ReactNode, memo, useMemo, useState } from "react";
import styled from "styled-components";
import { useAppThemeMode } from "../hooks/useAppThemeMode";
import { theme } from "antd"
import { useQueryAppMeta } from "../hooks/useQueryAppMeta";
import { useQueryAppExtensionLogicFlows } from "../hooks/useQueryAppExtensionLogicFlows";
import { OperateType } from "../interfaces/extension";
import { ILogicFlowContext } from "./LogicEditor/contexts";
import { IActivityMaterial } from "@my-rx-darg/minions-schema";
import { fxFlowMaterial } from "./LogicEditor/minion-materials/fxFlow";
import { backendActivityMaterialCategories } from "./LogicEditor/minion-materials";
import _ from "lodash"
import { appDesignerLocales } from "../locales";
import { backendActivityMaterialLocales } from "./LogicEditor/minion-materials/locales";



const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: row;
  height: 0;
  .model-tree-shell{
    flex:1;
    display: flex;
    flex-flow: column;
    background-color: ${props => props.theme.token?.colorBgBase};
    border: solid 1px ${props => props.theme.token?.colorBorderSecondary};
    border-left: 0;
    height: 0;
    overflow: auto;
  }

  box-sizing: border-box;
`


const LeftColumn = styled(ResizableColumn)`
  border: solid 1px;
`


export const ServiceExtension = memo(() => {
    const [selectedLogicFlow, setSelectedLogicFlow] = useState<ID>();
    const [selectedScript, setSelectedScript] = useState<ID>();
    const themMode = useAppThemeMode()
    const { token } = theme.useToken()
    const { meta } = useQueryAppMeta("app1")
    const { flows } = useQueryAppExtensionLogicFlows("app1")

    const logicFlowContextParam: ILogicFlowContext = useMemo(() => ({
      fxFlowMetas: flows?.filter(flow => flow.operateType === OperateType.SubMethod) || [],
    }), [flows])

    const materials = useMemo(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const materials: IActivityMaterial<ReactNode, any, any, any>[] = [fxFlowMaterial]
      return materials.concat(...backendActivityMaterialCategories.map(category => category.materials))
    }, [])


    const locales = useMemo(() => {
      return _.merge(appDesignerLocales, backendActivityMaterialLocales)
    }, [])

    

})