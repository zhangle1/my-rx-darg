import React from "react"
import { memo, useMemo } from "react"
import { ComponentField } from "./ComponentField"
import { ComponentSchemaContext } from "./contexts"
import { withController } from "./hocs/withController"
import { withBind } from "./hocs/withBind"
import { usePreviewComponent } from "./hooks"

import { withExprs } from "./hocs/withExprs"
import { INodeSchema } from "@my-rx-darg/schema"
import { IFieldMeta } from "@my-rx-darg/fieldy"
import { ID } from "@my-rx-darg/share"
import { IControllerMeta } from "@my-rx-darg/minions-runtime-react"

export interface IComponentRenderSchema extends INodeSchema<IFieldMeta, IControllerMeta> {
  id: ID,
  children?: IComponentRenderSchema[]
  slots?: {
    [name: string]: IComponentRenderSchema | undefined
  }
}
export type ComponentViewProps = {
  node: IComponentRenderSchema,
}

export const ComponentView = memo((
  props: ComponentViewProps
) => {
  const { node, ...other } = props
  const com = usePreviewComponent(node.componentName)

  const Component = useMemo(() => {
    return com && withBind(
      withExprs(
        withController(
          com,
          node["x-controller"] as IControllerMeta,
        ),
        node,
      ),
      node?.["x-data"],
    )
  }, [com, node]);

  const slots = useMemo(() => {
    const slts: { [key: string]: React.ReactElement } = {}
    for (const name of Object.keys(node?.slots || {})) {
      const slot = node?.slots?.[name]
      if (slot) {
        slts[name] = <ComponentView node={slot} />
      }
    }

    return slts
  }, [node?.slots])

  return (
    node &&
    <ComponentSchemaContext.Provider value={node}>
      <ComponentField fieldMeta={node?.["x-data"]}>
        {
          Component &&
          (
            node.children?.length ?
              <Component {...node.props} {...slots} {...other}>
                {
                  !node.selfRender && node.children?.map(child => {
                    return (<ComponentView key={child.id} node={child} />)
                  })
                }
              </Component>
              : <Component {...node.props} {...slots} {...other} />
          )
        }
      </ComponentField>
    </ComponentSchemaContext.Provider>
  )
})