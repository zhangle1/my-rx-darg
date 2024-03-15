import { IRxDragActivityMaterial } from "@my-rx-darg/minions-react-materials";
import { transactionIcon } from "../../icons";
import { transactionSchema } from "./schema";
import { NodeType } from "@my-rx-darg/minions-schema";
import { createId } from "@my-rx-darg/share";

export const transactionMaterial: IRxDragActivityMaterial = {
  icon: transactionIcon,
  label: "$transaction",
  activityType: NodeType.EmbeddedFlow,
  defaultPorts: {
    inPorts: [
      {
        id: createId(),
        name: "input",
        label: "",
      },
    ],
    outPorts: [
      {
        id: createId(),
        name: "finished",
        label: "$finished",
      },
      {
        id: createId(),
        name: "rollback",
        label: "$rollback",
      },
    ],
  },
  schema: transactionSchema,
  activityName: "transaction"
}
