import { ID } from '@my-rx-darg/share';
import { Tree } from 'antd';
import { memo, useCallback, useMemo } from 'react';
import styled from 'styled-components';
import { IExtensionLogicFlow } from '../../interfaces/extension';
import { useTranslate } from '@my-rx-darg/locales-react';
import { useGetScriptNodes } from './hooks/useGetScriptNodes';
import { useGetFlowNodes } from './hooks/useGetFlowNodes';
import { DataNode, EventDataNode } from 'antd/es/tree';
import { CodeOutlined } from '@ant-design/icons';
import { TreeNodeLabel } from '@my-rx-darg/uml-editor';
import { SvgIcon } from '@my-rx-darg/react-antd-shell';
import { logicflowIcon } from '@my-rx-darg/react-shell';
import { LogicFlowRootAction } from './LogicFlowRootAction';
import { ScriptLogicRootAction } from './ScriptLogicRootAction';
import { ExtensionType } from './types';

const { DirectoryTree } = Tree;

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  overflow: auto;
  .ant-tree-node-content-wrapper {
    display: flex;
    .ant-tree-title {
      flex: 1;
    }
  }
`;

const StyledDirectoryTree = styled(DirectoryTree)`
  padding-top: 16px;
  flex: 1;
  background-color: transparent;
`;

export const LogicTree = memo(
  (props: {
    selectedLogicFlow?: ID;
    selectedScript?: ID;
    onSelectLogicFlow?: (selectedLogicFlow?: ID) => void;
    onSelectScript?: (selectedScript?: ID) => void;
    flows?: IExtensionLogicFlow[];
  }) => {
    const {
      selectedLogicFlow,
      selectedScript,
      onSelectLogicFlow,
      onSelectScript,
      flows,
    } = props;
    const t = useTranslate();


    console.log("flows:"+JSON.stringify(flows))

    const getScriptLogicNodes = useGetScriptNodes();
    const getMetaLogicNodes = useGetFlowNodes(flows);

    const treeData: DataNode[] = useMemo(() => {
      const scriptNode: DataNode = {
        icon: <CodeOutlined />,
        title: (
          <TreeNodeLabel fixedAction action={<ScriptLogicRootAction />}>
            <div>{t('LogicScripts')}</div>
          </TreeNodeLabel>
        ),
        key: 'scripts',
        selectable: false,
        children: getScriptLogicNodes(),
      };
      const graphLogicsNode: DataNode = {
        icon: <SvgIcon>{logicflowIcon}</SvgIcon>,
        title: (
          <TreeNodeLabel fixedAction action={<LogicFlowRootAction />}>
            <div>{t('GraphLogics')}</div>
          </TreeNodeLabel>
        ),
        key: 'logicflows',
        selectable: false,
        children: getMetaLogicNodes(),
      };

      return [scriptNode, graphLogicsNode];
    }, [getMetaLogicNodes, getScriptLogicNodes, t]);


    const handleSelect = useCallback((keys: any[], info: { node: EventDataNode<any | DataNode> }) => {
      if (info?.node?.type === ExtensionType.script) {
        onSelectScript?.(info?.node?.key)
        onSelectLogicFlow?.(undefined)
      } else if (info?.node?.type === ExtensionType.logicflow) {
        onSelectLogicFlow?.(info?.node?.key)
        onSelectScript?.(undefined)
      }
    }, [onSelectLogicFlow, onSelectScript])
  


    return (
      <Container>
        <StyledDirectoryTree
          defaultExpandedKeys={['0']}
          selectedKeys={[selectedLogicFlow || selectedScript || '']}
          onSelect={handleSelect}
          treeData={treeData}
        />
      </Container>
    );
  }
);
