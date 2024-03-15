import { IFieldMeta } from '@my-rx-darg/fieldy';
import { memo, useEffect } from 'react';
import { useRegisterField } from './hooks/useRegisterField';
import { FieldContext } from '../../contexts';

export const XField = memo(
  (props: {
    fieldMeta: IFieldMeta;
    children?: React.ReactNode;
    initialValue?: unknown;
    value?: unknown;
  }) => {
    const { fieldMeta, initialValue, value, children } = props;
    //defaultValue要在字段注册时附加，方式非受控组件的问题
    const field = useRegisterField(fieldMeta);

    useEffect(() => {
      initialValue !== undefined && field?.setInitialValue(initialValue)
    }, [field, initialValue])
  
    useEffect(() => {
      value !== undefined && field?.setValue(value)
    }, [field, value])

    
    return (
      <FieldContext.Provider value={field}>
        {
          children
        }
      </FieldContext.Provider>
    )
  }
);
