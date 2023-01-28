import React from 'react';
import { Navigate } from 'react-router';

import Base from '../pages/Base';
import Home from '../pages/Home';
import Detail from '../pages/Detail';
import DetailMain from '../pages/Detail/Main';
import DetailChild from '../pages/Detail/Child';

const routes = () => {
  return [
    {
      path: '',
      element: <Navigate to="/main" />
    },
    {
      path: 'main',
      element: <Base />
    },
    {
      path: 'home',
      element: <Home />
    },
    {
      path: 'detail',
      element: <Detail />,
      children: [
        {
          path: '',
          element: <DetailMain />
        },
        {
          path: 'child',
          element: <DetailChild />
        }
      ]
    }
  ]
}
//
export default routes;