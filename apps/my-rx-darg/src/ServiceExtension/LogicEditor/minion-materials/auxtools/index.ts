import { IActivityMaterial } from "@my-rx-darg/minions-schema";
import { debugMaterial } from "./debug";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const auxActivities: IActivityMaterial<any, any, any, any>[] = [
  debugMaterial,
]