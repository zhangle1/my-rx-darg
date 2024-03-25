import { ReactComponent } from '@my-rx-darg/react-share';
import React from 'react';
import { forwardRef, memo, useMemo } from 'react';

export function mapComponent(
  WrappedComponent: ReactComponent,
  maps: { [key: string]: string }
): ReactComponent {
  return memo(
    forwardRef<HTMLElement>((props: any, ref) => {
      const mapedProps = useMemo(() => {
        const newProps = {} as any;
        for (const key of Object.keys(props || {})) {
          if (maps[key]) {
            newProps[maps[key]] = props?.[key];
          } else {
            newProps[key] = props?.[key];
          }
        }
        return newProps;
      }, [props]);

      return <WrappedComponent ref={ref} {...mapedProps}></WrappedComponent>;
    })
  );
}
