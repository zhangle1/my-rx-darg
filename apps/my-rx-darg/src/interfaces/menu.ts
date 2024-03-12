import { IMenuItem } from "@my-rx-darg/react-menu-designer";

export interface IMenu{
    id: string,
    title?: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items?: IMenuItem<any>[]
}