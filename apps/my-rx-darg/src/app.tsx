// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, Routes } from 'react-router-dom';
import styles from './app.module.css';

import NxWelcome from './app/nx-welcome';
import { ProductList } from '@my-rx-darg/products';
import { OrderList } from '@my-rx-darg/orders';
import { memo } from 'react';
import { useQueryApp } from './hooks/useQueryApp';
import { AppContext } from './contexts';
import { FrontendRoot } from './FrontendRoot';

function Home() {
  return <h1>Home</h1>;
}



export const AppDesignerExample = memo(() => {
  const { app } = useQueryApp('app1');

  return (
    <AppContext.Provider value={app}>
      {app && <Routes>
          <Route path="" element={<FrontendRoot></FrontendRoot>}>
            <Route path={""} element={<Home></Home>}></Route>
          </Route>
        </Routes>}
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
export default AppDesignerExample;
