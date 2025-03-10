import { AuthLayout, MainLayout } from "@/layouts";
import { Home, Login, NotFound } from "@/pages";
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
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [{ index: true, element: <Login /> }],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
