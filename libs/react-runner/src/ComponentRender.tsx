import { memo, useEffect, useState } from "react"
import { ComponentView, IComponentRenderSchema } from "./ComponentView"
import { transToRenderSchema } from "./transform"

import { PreviewComponentsContext } from "./contexts"
import { LogicFlowOptions, LogicflowRuntime } from "./LogicflowRuntime"
import { INodeSchema } from "@my-rx-darg/schema"
import { IReactComponents } from "@my-rx-darg/react-share"
import { ILocalesManager } from "@my-rx-darg/locales"
import { IFieldMeta } from "@my-rx-darg/fieldy"


export const ComponentRender = memo((props: {
  schema: INodeSchema,
  components: IReactComponents | undefined
  //controllerFactories?: ControllerFactories,
  localesManager?: ILocalesManager,//@@ 暂时未用
  logicflowOptions?: LogicFlowOptions,
}) => {
  const { schema, components, logicflowOptions } = props

  const [node, setNode] = useState<IComponentRenderSchema>()
  useEffect(() => {
    if (schema) {
      setNode(transToRenderSchema(schema as INodeSchema<IFieldMeta | undefined>))
    } else {
      setNode(undefined)
    }
  }, [schema])

  return (
    node
      ? <LogicflowRuntime
        schema={node}
        {...logicflowOptions}
      >
        <PreviewComponentsContext.Provider
          value={components || {}}
        >
          {node && <ComponentView node={node} />}
        </PreviewComponentsContext.Provider>
      </LogicflowRuntime>
      : <></>
  )
})