/* eslint-disable @nx/enforce-module-boundaries */
import { FileOutlined, FunctionOutlined } from "@ant-design/icons";
import { useTranslate } from "@my-rx-darg/locales-react";

import { useCallback, useMemo } from "react";
import { ExtensionType } from "../types";
import { CodeLabel } from "../CodeLabel";
import { useQueryAppExtensionScripts } from "../../../hooks/useQueryAppExtensionScripts";
import { OperateType, IExtendsionScript } from "../../../interfaces/extension";


export function useGetScriptNodes() {
    const t = useTranslate();
    const { scripts } = useQueryAppExtensionScripts("app1")
    const codeMetas = useMemo(() => scripts?.filter(sc => sc.operateType === OperateType.SubMethod), [scripts])
    const getCodeNode = useCallback((codeMeta: IExtendsionScript) => {
        return {
          title: <CodeLabel codeMeta={codeMeta} />,
          key: codeMeta.id,
          isLeaf: true,
          icon: <FileOutlined />,
          type: ExtensionType.script,
        }
      }, [])


      const getScriptLogicNode = useCallback((scriptMeta: IExtendsionScript) => {
        return {
          title: <ScriptLogicLabel scriptMeta={scriptMeta} />,
          key: scriptMeta.id,
          isLeaf: true,
          icon: <FunctionOutlined />,
          type: ExtensionType.script,
        }
      }, [])



}
