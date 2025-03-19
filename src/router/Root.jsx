import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/landing/LandingPage";
import RootLayout from "../layout/RootLayout";
import Second from "../pages/second/Second";
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
      {
        path: "social",
        element: <LandingPage />,
      },
      {
        path: "organic",
        element: <Second />,
      },
    ],
  },
]);

export default router;
