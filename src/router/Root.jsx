import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import TrafficRedirect from "../layout/TrafficRedirect";
import NotFound from "../pages/not-found";
import Navbar from "../components/view/Navbar";
import { useEffect } from "react";

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
        path: "terms",
        element: <OtherPage title="Terms" />,
      },
      {
        path: "privacy-policy",
        element: <OtherPage title="Privacy Policy" />,
      },
      {
        path: "legal",
        element: <OtherPage title="Legal" />,
      },
      {
        path: "vulnerability",
        element: <OtherPage title="Vulnerability" />,
      },
      {
        path: "cookies",
        element: <OtherPage title="Cookies" />,
      },
      {
        path: "modern-slavery",
        element: <OtherPage title="Modern Slavery" />,
      },
      {
        path: "candidate-privacy",
        element: <OtherPage title="Data Protection" />,
      },
      {
        path: "help",
        element: <OtherPage title="Help" />,
      },
      {
        path: "contact",
        element: <OtherPage title="Contact" />,
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default router;

function OtherPage({ title = "" }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [title]);

  return (
    <div className="h-screen flex flex-col  bg-gradient-to-r from-[#0569E8] to-[#76D232] items-center justify-center pt-20">
      <Navbar />
      <h1 className="text-white font-bold text-3xl">{title}</h1>
      <h3 className="text-gray-200 text-xl mt-2">No Content</h3>
    </div>
  );
}
