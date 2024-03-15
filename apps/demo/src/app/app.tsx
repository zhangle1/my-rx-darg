// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

// eslint-disable-next-line @nx/enforce-module-boundaries
import { AppDesignerExample } from "@my-rx-darg/app-designer-example"

import { Route, Routes, Link } from 'react-router-dom';

export function App() {
  // const {}

  return (
    <Routes>
      <Route path={'/*'} element={<AppDesignerExample />}></Route>
    </Routes>
  );
}

export default App;
