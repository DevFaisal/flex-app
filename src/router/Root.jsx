import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import TrafficRedirect from "../layout/TrafficRedirect";
import NotFound from "../pages/not-found";
import FooterRoutes from "./FooterRoutes";

const router = createBrowserRouter([
  {
    path: "/",
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
  { path: "*", element: <NotFound /> },
]);

export default router;
