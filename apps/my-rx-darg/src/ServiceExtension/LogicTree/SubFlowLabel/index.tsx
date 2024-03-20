import React, { useCallback, useState } from "react";
import { memo } from "react";
import { SubLogicAction } from "../SubLogicAction";
import { IExtension } from "../../../interfaces/extension";
import { NameDialog } from "../dialogs/NameDialog";
import { useRemoveExtensionLogicFlow } from "../../../hooks/useRemoveExtensionLogicFlow";
import { useSaveExtensionLogicFlow } from "../../../hooks/useSaveExtensionLogicFlow";
import { useTranslate } from "@my-rx-darg/locales-react";
import { TreeNodeLabel } from "@my-rx-darg/uml-editor";

export const SubFlowLabel = memo((
  props: {
    codeMeta: IExtension
  }
) => {
  const { codeMeta } = props;
  const [openEdit, setOpenEdit] = useState<boolean>()
  const [confirmOpen, setConfirmOpen] = useState<boolean>()

  const t = useTranslate()

  const [remove, { loading: removing }] = useRemoveExtensionLogicFlow()
  const [save, { loading: saving }] = useSaveExtensionLogicFlow(
    {
      onComplete: () => {
        setOpenEdit(false)
      }
    }
  )


  const handleRemove = useCallback(() => {
    remove(codeMeta.id)
  }, [remove, codeMeta.id])

  const handleEditClose = useCallback(() => {
    setOpenEdit(false)
  }, [])

  const handleEditConfirm = useCallback((name: string) => {
    save({ ...codeMeta, name })
  }, [save, codeMeta])

  const handleEdit = useCallback(() => {
    setOpenEdit(true)
  }, [])

  return (
    <>
      <TreeNodeLabel
        fixedAction={confirmOpen || removing}
        action={
          <SubLogicAction
            onConfirmOpenChange={setConfirmOpen}
            onRemove={handleRemove}
            removing={removing}
            onEdit={handleEdit}
          />
        }
      >
        <div>{codeMeta.name}</div>
      </TreeNodeLabel>
      {openEdit && <NameDialog
        name={codeMeta.name}
        saving={saving}
        open={openEdit}
        title={t("EditSubFlow")}
        onClose={handleEditClose}
        onConfirm={handleEditConfirm}
      />}
    </>
  )
})
