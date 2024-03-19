import { memo, ReactNode, useMemo } from "react";
import { LogicFlowEditorAntd5InnerProps } from "./LogicFlowEditorAntd5Inner";
import { ILocales } from "@my-rx-darg/locales";
import { IThemeToken } from "@my-rx-darg/minions-logicflow-editor";
import { theme } from "antd";
import { IActivityMaterial } from "@my-rx-darg/minions-schema";


export const LogicFlowEditorAntd5 = memo((
    props: {
      lang?: string,
      locales?: ILocales,
    } & LogicFlowEditorAntd5InnerProps & {
      token?: IThemeToken,
    }
  ) => {
    const { lang = "zh-CN", locales, materialCategories, ...other } = props
    const { token } = theme.useToken();
    const materials = useMemo(() => {
      const materials: IActivityMaterial<ReactNode>[] = []
      return materials.concat(...materialCategories.map(category => category.materials))
    }, [materialCategories])
  
  
    return (
      <LogicFlowEditorAntd5Scope
        lang={lang}
        locales={locales}
        token={token}
        materials={materials}
      >
        <LogicMetaEditorAntd5Inner materialCategories={materialCategories}  {...other} />
      </LogicFlowEditorAntd5Scope>
    )
  })