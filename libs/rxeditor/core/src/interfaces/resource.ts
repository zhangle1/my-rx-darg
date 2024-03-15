import { INodeSchema } from "@my-rx-darg/schema";
import { ID, RxProps } from "./types";
import { ILocales } from "@my-rx-darg/locales";
import { ISubscribable } from "@my-rx-darg/share";

export interface IResource<Icon = unknown> {
  //唯一名称，防止重复注册
  name: string
  title?: string
  elements: INodeSchema[] | INodeSchema,
  icon?: Icon
  color?: string,
  resourceLocales?: ILocales,
  imageUrl?: string,
}

export interface IResourceNode<IconType = unknown> extends IResource<IconType> {
  id: ID
  title: string,
  rxProps?: RxProps
}

export interface IResourceManager<IconType = unknown> extends ISubscribable<Record<string, IResourceNode<IconType> | undefined>> {
  getResource(id: ID): IResourceNode<IconType> | undefined
  getResourceByName(name: string): IResourceNode<IconType> | undefined
  registerResources(...resources: IResource[]): void
  clear(): void
}