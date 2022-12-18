import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Home } from './Home';
import { BillsShareDetails } from './BillsShareDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: 'divisao-de-contas',
    element: <BillsShareDetails />,
  },
]);

export const Router = () => {
  return <RouterProvider router={router} />;
};
