import { useCallback } from "react";
import { useGetMaterial } from "./useGetMaterial";
import { useLogicFlowContext } from "./useLogicFlowContext";
import { INodeDefine } from "@my-rx-darg/minions-schema";
import { useTranslate } from "@my-rx-darg/locales-react";

export function useGetSubLabel() {
  const getMaterial = useGetMaterial()
  const logicContext = useLogicFlowContext();
  const t = useTranslate()
  const getLabel = useCallback((nodeMeta: INodeDefine<unknown>) => {
    const material = getMaterial(nodeMeta.activityName)
    const subTitle = (nodeMeta.subLabel?.startsWith("$") ? t(nodeMeta.subLabel.substring(1)) : nodeMeta.subLabel) || material?.subTitle?.(nodeMeta.config, logicContext)
    return subTitle
  }, [getMaterial, logicContext, t])

  return getLabel
}