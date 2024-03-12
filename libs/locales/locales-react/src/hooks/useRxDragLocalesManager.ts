import { RxDragLocalesManager } from "@my-rx-darg/locales";
import { useLocalesManager } from "./useLocalesManager";

export function useRxDragLocalesManager(){
  return useLocalesManager() as RxDragLocalesManager
}