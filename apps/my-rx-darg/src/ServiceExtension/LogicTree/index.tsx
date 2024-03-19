import { ID } from "@my-rx-darg/share";
import { Tree } from "antd";
import { memo } from "react";
import styled from "styled-components";
import { IExtensionLogicFlow } from "../../interfaces/extension";
import { useTranslate } from "@my-rx-darg/locales-react";
import { useGetScriptNodes } from "./hooks/useGetScriptNodes";

const { DirectoryTree } = Tree;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow: auto;
  .ant-tree-node-content-wrapper{
    display: flex;
    .ant-tree-title{
      flex:1;
  }
}
`

const StyledDirectoryTree = styled(DirectoryTree)`
    padding-top: 16px;
    flex: 1;
    background-color: transparent;
`

export const LogicTree =memo((
    props:{
        selectedLogicFlow?:ID,
        selectedScript?: ID,
        onSelectLogicFlow?: (selectedLogicFlow?: ID) => void,
        onSelectScript?: (selectedScript?: ID) => void,
        flows?: IExtensionLogicFlow[]
    }
    ) =>{
        const { selectedLogicFlow, selectedScript, onSelectLogicFlow, onSelectScript, flows } = props;
        const t = useTranslate();
    
        const getScriptLogicNodes = useGetScriptNodes()
        // const getMetaLogicNodes = useGetFlowNodes(flows)
      return (<>测试一下</>)
    })