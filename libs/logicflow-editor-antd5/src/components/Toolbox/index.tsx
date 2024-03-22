import styled from "styled-components"
import { Collapse as AntdCollapse, CollapseProps } from "antd";
import { memo, ReactNode, useMemo } from "react";
import { ActivityMaterialCategory } from "@my-rx-darg/minions-schema";
import { useTransMaterialCategories } from "../../hooks";
import { ActivityResource, ToolItem, ToolItemCategory } from "@my-rx-darg/minions-logicflow-editor";


const Collapse = styled(AntdCollapse)`
  flex:1;
  border-radius: 0;
  overflow: auto;
`




export const Toolbox = memo((props: {
  materialCategories: ActivityMaterialCategory<ReactNode>[]
}) => {
  const { materialCategories } = props;
  const categories = useTransMaterialCategories(materialCategories);
  const items: CollapseProps['items'] = useMemo(() => categories?.map(category => ({
    key: category.name,
    label: category.name,
    children: <ToolItemCategory>
      {
        category.materials.map((material, index) => {
          return <ActivityResource key={index + material.activityName} material={material}>
            {
              (onStartDrag) => {
                return <ToolItem
                  icon={material.icon as ReactNode}
                  title={material.label}
                  color={material.color as string}
                  onMouseDown={onStartDrag}
                />
              }
            }
          </ActivityResource>
        })
      }
    </ToolItemCategory>
  })), [categories])
  return (
    <Collapse
      defaultActiveKey={[categories?.[0]?.name]}
      bordered={false}
      accordion
      expandIconPosition="end"
      items = {items}
    >
    </Collapse>
  )
})