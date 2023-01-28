import React from 'react';
import { useRoutes } from 'react-router';

import routes from './routes';

const App = () => {
  // ROUTE
  const appRoutes = useRoutes(routes());

  return appRoutes;
}

export default App;
