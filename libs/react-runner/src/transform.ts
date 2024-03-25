import { IFieldMeta } from "@my-rx-darg/fieldy";
import { IComponentRenderSchema } from "./ComponentView";
import { INodeSchema } from "@my-rx-darg/schema";
import { makeRxId } from "@my-rx-darg/share";

export function transToRenderSchema(node: INodeSchema<IFieldMeta | undefined>): IComponentRenderSchema {
  const slots: { [name: string]: IComponentRenderSchema | undefined } = {}
  for (const key of Object.keys(node.slots || {})) {
    const slot = node.slots?.[key];
    if (slot) {
      slots[key] = transToRenderSchema(slot as INodeSchema<IFieldMeta | undefined>)
    }
  }

  return {
    id: makeRxId(),
    ...node,
    children: node?.children?.map(child => transToRenderSchema(child as INodeSchema<IFieldMeta | undefined>)),
    slots
  } as IComponentRenderSchema
}