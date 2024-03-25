import React, { Fragment, memo, useCallback, useMemo } from "react"
import styled from "styled-components"
import { PortsInput } from "./PortsInput"

import { Input, InputNumber, Select } from "antd"
import { IReactComponents } from "@my-rx-darg/react-share"
import { useRxDragLocalesManager } from "@my-rx-darg/locales-react"
import { INodeSchema } from "@my-rx-darg/schema"
import { ActionType, useBackup, useDispatch, useGetMaterial, useMarkChange, useSelectedNode } from "@my-rx-darg/minions-logicflow-editor"
import { FormItem, FormLayout } from "@my-rx-darg/react-antd-components"
import { VirtualForm } from "@my-rx-darg/fieldy-react"
import { FormValue } from "@my-rx-darg/fieldy"
import { ComponentRender } from "@my-rx-darg/react-runner"

const EmptyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const PropertyBox = memo((
  props: {
    setters?: IReactComponents
  }
) => {
  const { setters } = props;
  const node = useSelectedNode()

  const getMaterial = useGetMaterial()
  const localesManager = useRxDragLocalesManager()
  const dispatch = useDispatch()
  const material = useMemo(() => getMaterial(node?.activityName || ""), [getMaterial, node?.activityName])
  const backup = useBackup()
  const markChange = useMarkChange()
  const propsSchema = useMemo(() => {
    if (material?.schema) {
      //翻译
      return (localesManager?.translateDesignerSchema('',
        JSON.parse(JSON.stringify(material?.schema))
      ) || material?.schema) as INodeSchema
    } else {
      return undefined
    }

  }, [localesManager, material?.schema])

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleNodeChange = useCallback((nodeData: any) => {
    backup()
    const newData = { ...node, ...nodeData }
    dispatch?.({ type: ActionType.CHANGE_NODE, payload: newData })
    markChange()
  }, [backup, dispatch, markChange, node])

  return (
    <FormLayout
      labelAlign="left"
      colon={false}
      labelCol={{ span: 7 }}
      wrapperCol={{ span: 17 }}
      labelWrap={true}
    >
      {
        node
          ?
          <VirtualForm
            initialValue={node as unknown as FormValue}
            onValueChange={handleNodeChange}
            key={node.id}
          >
            {
              propsSchema &&
              <ComponentRender
                components={{
                  Fragment: Fragment,
                  FormItem: FormItem,
                  Input,
                  Select,
                  Switch,
                  Radio,
                  Slider,
                  InputNumber,
                  TextArea: Input.TextArea,
                  PortsInput,
                  ValueInput,
                  JSONInput,
                  ...setters || {}
                }}
                schema={propsSchema}
              />
            }
          </VirtualForm>
          : <EmptyContainer>
            {/* <Empty /> */}
          </EmptyContainer>
      }
    </FormLayout>
  )
})