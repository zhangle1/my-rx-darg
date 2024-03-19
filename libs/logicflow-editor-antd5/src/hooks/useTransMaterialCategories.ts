import { ReactNode, useMemo } from "react";
import { useTransMaterial } from "./useTransMaterial";
import { useTrans } from "./useTrans";
import { ActivityMaterialCategory } from "@my-rx-darg/minions-schema";

export function useTransMaterialCategories(categories: ActivityMaterialCategory<ReactNode>[]) {
  const t = useTransMaterial();
  const tran = useTrans();

  const rt = useMemo(() => {
    return categories.map(category => ({ ...category, name: tran(category.name)||category.name, materials: category.materials?.map(material => t(material)) }))
  }, [categories, t, tran])

  return rt;
}