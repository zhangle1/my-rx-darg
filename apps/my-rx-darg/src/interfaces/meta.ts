import { ID } from "@my-rx-darg/share"
import { IApp } from "./app"


export interface IMeta {
    id: ID
    name?: string
    content?: MetaContent
    publishedContent?: MetaContent
    publishedAt?: Date
    updatedAt?: Date
    createdAt?: Date
    app?: IApp,
  }
  
  export interface IMetaInput {
    id?: ID
    name?: string
    content?: MetaContent
    publishedContent?: MetaContent
    publishedAt?: Date
  }