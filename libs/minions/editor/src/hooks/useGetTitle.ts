import { useCallback } from "react";
import { useGetMaterial } from "./useGetMaterial";
import { useLogicFlowContext } from "./useLogicFlowContext";
import { INodeDefine } from "@my-rx-darg/minions-schema";

export function useGetTitle() {
  const getMaterial = useGetMaterial()
  const logicContext = useLogicFlowContext();

  const getTitle = useCallback((nodeMeta: INodeDefine<unknown>) => {
    const material = getMaterial(nodeMeta.activityName)
    const title = material?.title?.(nodeMeta.config, logicContext)
    return title
  }, [getMaterial, logicContext])

  return getTitle
}