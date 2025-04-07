import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import TrafficRedirect from '../layout/TrafficRedirect';
import NotFound from '../pages/not-found';
import footerRoutes from './footer/index';
import infoRoutes from './info/index';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <TrafficRedirect />,
      },
      ...footerRoutes.map((Route) => ({
        path: Route.path,
        element: <Route.element />,
      })),
      ...infoRoutes.map((Route) => ({
        path: Route.path,
        element: <Route.element />,
      })),
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;
