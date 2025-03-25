import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import TrafficRedirect from "../layout/TrafficRedirect";
import NotFound from "../pages/not-found";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <TrafficRedirect />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;
