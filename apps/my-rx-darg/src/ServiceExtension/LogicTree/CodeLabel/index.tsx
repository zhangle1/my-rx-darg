import { useTranslate } from '@my-rx-darg/locales-react';
import { IExtendsionScript } from '../../../interfaces/extension';
import { memo, useCallback, useState } from 'react';
import { useRemoveExtensionScript } from '../../../hooks/useRemoveExtensionScript';
import { useSaveExtensionScript } from '../../../hooks/useSaveExtensionScript';
import { TreeNodeLabel } from '@my-rx-darg/uml-editor';
import { SubLogicAction } from '../SubLogicAction';
import { NameDialog } from '../dialogs/NameDialog';

export const CodeLabel = memo((props: { codeMeta: IExtendsionScript }) => {
  const { codeMeta } = props;
  const [openEdit, setOpenEdit] = useState<boolean>();
  const [confirmOpen, setConfirmOpen] = useState<boolean>();

  const t = useTranslate();

  const [remove, { loading: removing }] = useRemoveExtensionScript();
  const [save, { loading: saving }] = useSaveExtensionScript({
    onComplete: () => {
      setOpenEdit(false);
    },
  });

  const handleRemove = useCallback(() => {
    remove(codeMeta.id);
  }, [remove, codeMeta.id]);

  const handleEditClose = useCallback(() => {
    setOpenEdit(false);
  }, []);

  const handleEditConfirm = useCallback(
    (name: string) => {
      save({ ...codeMeta, name });
    },
    [save, codeMeta]
  );

  const handleEdit = useCallback(() => {
    setOpenEdit(true);
  }, []);

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
        title={t("EditCode")}
        onClose={handleEditClose}
        onConfirm={handleEditConfirm}
      />}
    </>
  );
});
