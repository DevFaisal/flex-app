import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import TrafficRedirect from '../layout/TrafficRedirect';
import NotFound from '../pages/not-found';
import Navbar from '../components/view/Navbar';
import { useEffect } from 'react';
import FooterRoutes from './FooterRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <TrafficRedirect />,
      },
      ...FooterRoutes.map((Route) => ({
        path: Route.path,
        element: <Route.element />,
      })),
    ],
  },
  { path: '*', element: <NotFound /> },
]);

export default router;

function OtherPage({ title = '' }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [title]);

  return (
    <div className="h-screen flex flex-col  bg-gradient-to-r from-[#0569E8] to-[#76D232] items-center justify-center pt-20">
      <Navbar />
      <h1 className="text-white font-bold text-3xl">{title}</h1>
      <h3 className="text-gray-200 text-xl mt-2">No Content</h3>
    </div>
  );
}
