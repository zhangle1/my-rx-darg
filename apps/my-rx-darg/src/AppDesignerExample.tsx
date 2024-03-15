// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';

import { memo } from 'react';
import { useQueryApp } from './hooks/useQueryApp';
import { AppContext } from './contexts';
import { FrontendRoot } from './FrontendRoot';
import { AppDesigner } from './AppDesigner';
import { TopNavType } from './Toolbar';

export const AppDesignerExample = memo(() => {
  const { app } = useQueryApp('app1');

  return (
    <AppContext.Provider value={app}>
      {app && (
        <Routes>
          <Route path="" element={<FrontendRoot />}>
            <Route path={''} element={<AppDesigner />}>
              {/* <Route path={`/${TopNavType.extends}/`} element={<ServiceExtension />}></Route> */}


            </Route>
          </Route>
        </Routes>
      )}
    </AppContext.Provider>
  );

  // return (
  //   <Routes>
  //     <Route path="/" element={<Home />}></Route>
  //     <Route path="/products" element={<ProductList />}></Route>
  //     <Route path="/orders" element={<OrderList />}></Route>
  //   </Routes>
  // );
});
// export default AppDesignerExample;
