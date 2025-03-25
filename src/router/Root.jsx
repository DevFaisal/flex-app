import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import TrafficRedirect from "../layout/TrafficRedirect";

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
]);

export default router;
