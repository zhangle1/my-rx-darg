import { ITreeNode } from "@my-rx-darg/core";

import { useContext } from "react";
import { NodeContext } from "../contexts";

export function useNode(){
  const node = useContext<ITreeNode|undefined>(NodeContext)
  return node;
}