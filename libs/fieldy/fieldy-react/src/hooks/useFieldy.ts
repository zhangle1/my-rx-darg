import { useContext } from "react";
import { FieldyContext } from "../contexts";
import { IFieldyEngine } from "@my-rx-darg/fieldy";

export function useFieldy() {
  const fieldy = useContext<IFieldyEngine | undefined>(FieldyContext)
  return fieldy;
}