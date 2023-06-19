import { createBrowserRouter } from 'react-router-dom';

import NotFound from './components/NotFound';
import RootPage from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootPage />,
    errorElement: <NotFound />,
  },
]);

export default router;
