import {
  FlowToolbar,
  FlowToolbox,
  ILogicMetas,
  ResizableColumn,
} from '@my-rx-darg/minions-logicflow-editor';
import { memo, useCallback, useState } from 'react';
import styled, { CSSProperties } from 'styled-components';

const EditorShell = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
`;

const CenterArea = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  flex-flow: column;
  height: 100%;
  box-sizing: border-box;
`;

const OperateArea = styled.div`
  position: relative;
  flex: 1;
  display: flex;
  width: 100%;
  height: 0;
  box-sizing: border-box;
`;

const RightArea = styled(ResizableColumn)`
  width: 280px;
  border-left: ${(props) => props.theme.token?.colorBorderSecondary} solid 1px;
  background-color: ${(props) => props.theme.token?.colorBgBase};
  display: flex;
  flex-flow: column;
`;

export type LogicFlowEditorInnerProps = {
  value?: ILogicMetas;
  onChange?: (value: ILogicMetas) => void;
  toolbox?: React.ReactNode;
  toolbar?: React.ReactNode;
  propertyBox?: React.ReactNode;
  children?: React.ReactNode;
  style?: CSSProperties;
  className?: string;
};

export const LogicFlowEditorInner = memo((props: LogicFlowEditorInnerProps) => {
  const { value, onChange, toolbox, toolbar, propertyBox, children, ...rest } =
    props;
  const [collapsed, setCollpased] = useState<boolean>();

  const handleToggle = useCallback(() => {
    setCollpased((collapsed) => !collapsed);
  }, []);

  return (
    <EditorShell {...rest}>
      <CenterArea>
        {' '}
        {toolbar && <FlowToolbar>{toolbar}</FlowToolbar>}
        <OperateArea>
          {toolbox && (
            <FlowToolbox minWidth={100} maxWidth={500}>
              {toolbox}
            </FlowToolbox>
          )}
         <FlowCanvas
            value={value}
            onChange={onChange}
          >
            {children}
          </FlowCanvas>
        </OperateArea>
      </CenterArea>
    </EditorShell>
  );
});
