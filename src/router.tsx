import { createBrowserRouter } from 'react-router-dom';

import NotFound from './components/NotFound';
import ProductPage from './pages/Product';
import RootPage from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/products/:productId',
        element: <ProductPage />,
      },
    ],
  },
]);

export default router;
