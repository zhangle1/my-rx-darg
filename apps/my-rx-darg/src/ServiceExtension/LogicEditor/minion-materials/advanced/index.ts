import { customizedLoopMaterial } from "./customizedLoop";
import { transactionMaterial } from "./transaction";
import { httpRequestMaterial } from "./httpRequest";
import { graphqlRequestMaterial } from "./graphqlRequest";
import { entifyRequestMaterial } from "./entifyRequest";
import { IActivityMaterial } from "@my-rx-darg/minions-schema";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const advancedActivities: IActivityMaterial<any, any, any, any>[] = [
  customizedLoopMaterial,
  transactionMaterial,
  entifyRequestMaterial,
  httpRequestMaterial,
  graphqlRequestMaterial,
]