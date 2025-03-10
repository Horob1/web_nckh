import { MainLayout } from "@/layouts";
import { Home, NotFound } from "@/pages";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Layout bao quanh các trang
    children: [
      { index: true, element: <Home /> },
      // { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> }, // Route 404
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
