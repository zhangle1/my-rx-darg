import { memo, useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import { backendActivityMaterialCategories } from './minion-materials';
import { useQueryExtensionLogicFlow } from '../../hooks/useQueryExtensionLogicFlow';
import { Button } from 'antd';
import { Toolbar } from './Toolbar';
import { useSaveExtensionLogicFlow } from '../../hooks/useSaveExtensionLogicFlow';
import { ID } from '@my-rx-darg/share';
import {
  ILogicMetas,
  useChangeFlag,
} from '@my-rx-darg/minions-logicflow-editor';
import { useTranslate } from '@my-rx-darg/locales-react';
import { LogicMetaEditorAntd5Inner } from '@my-rx-darg/logicflow-editor-antd5';

const SaveButton = styled(Button)`
  margin-left: 32px;
`;

const emptyValue = {
  nodes: [],
  lines: [],
};

export const LogicEditor = memo((props: { id?: ID }) => {
  const { id } = props;
  const [inputValue, setInputValue] = useState<ILogicMetas>(emptyValue);
  const { changeFlag, setChangeFlag } = useChangeFlag();

  const t = useTranslate();
  const [save, { loading: saving }] = useSaveExtensionLogicFlow({
    onComplete: () => {
      setChangeFlag(0);
    },
  });

  const { flow } = useQueryExtensionLogicFlow(id || '');

  useEffect(() => {
    setInputValue(flow?.logicMetas || emptyValue);
  }, [flow?.logicMetas]);

  const handleSave = useCallback(() => {
    if (flow) {
      save({
        ...flow,
        logicMetas: inputValue,
      });
    }
  }, [flow, inputValue, save]);

  return (
    <LogicMetaEditorAntd5Inner
      style={{ display: id ? undefined : 'none' }}
      materialCategories={backendActivityMaterialCategories}
      value={inputValue}
      toolbar={
        <Toolbar
          title={
            <>
              <span className="text">{flow?.name}</span>
            </>
          }
        >
          <SaveButton
            type="primary"
            disabled={!changeFlag}
            loading={saving}
            onClick={handleSave}
          >
            {t('Save')}
          </SaveButton>
        </Toolbar>
      }
      onChange={setInputValue}
    />
  );
});
