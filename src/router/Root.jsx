import { createBrowserRouter } from "react-router";
import LandingPage from "../pages/landing/LandingPage";
import RootLayout from "../layout/RootLayout";
import Second from "../pages/second/Second";

const router = createBrowserRouter([
  {
    path: "",
    element: <RootLayout />,
    children: [
      // {
      //   path: "",
      //   element: <LandingPage />,
      // },
      {
        path: "",
        element: <Second />,
      },
    ],
  },
]);

export default router;
