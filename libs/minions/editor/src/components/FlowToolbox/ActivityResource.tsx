import React, { ReactNode } from "react"
import { memo, useCallback } from "react"
import { useGraph, useDnd, useGetNodeConfig } from "../../hooks";
import { IActivityNode } from "../../interfaces";
import { IActivityMaterial } from "@my-rx-darg/minions-schema";
import { createId } from "@my-rx-darg/share";

export type ActivityResourceProps = {
  children?: (onMouseDown: ((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void)) => ReactNode,
  material: IActivityMaterial<React.ReactNode>,
  createNode?: () => IActivityNode,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  config?: any,
}

export const ActivityResource = memo((props: ActivityResourceProps) => {
  const { children, material, createNode, config } = props
  const graph = useGraph()
  const dnd = useDnd()
  const getNodeConfig = useGetNodeConfig()

  const handleDrag = useCallback((e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {

    console.log("graph"+JSON.stringify(graph))
    if (!graph) {
      return;
    }
    const nodeMeta: IActivityNode = createNode ? createNode() : {
      id: createId(),
      label: material.label,
      type: material.activityType,
      activityName: material.activityName,
      ...material.defaultPorts,
      config: { ...material.defaultConfig || {}, ...config },
    }
    const node = graph.createNode(getNodeConfig(nodeMeta));
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dnd?.start(node, e.nativeEvent as any);
  }, [config, createNode, dnd, getNodeConfig, graph, material.activityName, material.activityType, material.defaultConfig, material.defaultPorts, material.label])

  return <>
    {children?.(handleDrag)}
  </>
})
