import { IActivityMaterial } from '@my-rx-darg/minions-schema';
import { IThemeToken } from '../interfaces';
import { memo, ReactNode, useEffect, useMemo, useState } from 'react';
import { Graph } from '@antv/x6';
import { useTranslate } from '@my-rx-darg/locales-react';
import { EditorStore } from '../classes';
import { GraphContext, LogicFlowContext, LogicFlowEditorStoreContext, MaterialsContext, ThemeTokenContext } from '../contexts';
import { ThemeProvider } from 'styled-components';

export type LogicFlowEditorScopeProps<T = unknown> = {
  themMode?: 'dark' | 'light';
  token: IThemeToken;
  materials: IActivityMaterial<ReactNode>[];
  logicFlowContext?: T;
  children?: React.ReactNode;
};

//编辑器Scope定义
export const LogicFlowEditorScope = memo((props: LogicFlowEditorScopeProps) => {
  const { themMode, token, materials, logicFlowContext, children } = props;
  const graphState = useState<Graph>();
  const materialsState = useState<IActivityMaterial[]>([]);
  const [, setMaterials] = materialsState;
  const theme: { token: IThemeToken } = useMemo(() => {
    return {
      mode: themMode,
      token,
    };
  }, [themMode, token]);

  const t = useTranslate();

  const store: EditorStore = useMemo(() => {
    return new EditorStore();
  }, []);

  useEffect(() => {
    setMaterials(mats => {
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      materials
      return [...mats.filter(mat => !materials.find(m => m.activityName === mat.activityName)), ...materials]
    })
  }, [materials, setMaterials])

  const newContext = useMemo(() => ({ ...(logicFlowContext as any), t }), [logicFlowContext, t])

  return (
    <LogicFlowEditorStoreContext.Provider value={store}>
      <ThemeProvider theme={theme}>
        <ThemeTokenContext.Provider value={token}>
          <LogicFlowContext.Provider value={newContext}>
            <MaterialsContext.Provider value={materialsState}>
              <GraphContext.Provider value={graphState}>
                {children}
              </GraphContext.Provider>
            </MaterialsContext.Provider>
          </LogicFlowContext.Provider>
        </ThemeTokenContext.Provider>
      </ThemeProvider>
    </LogicFlowEditorStoreContext.Provider>
  )
});
