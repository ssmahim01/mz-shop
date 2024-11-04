import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Statistics from "./pages/Statistics";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Cards from "./components/Cards";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    children: [
      {
        path: '/',
        loader: () => fetch('../categories.json'),
        element: <Home></Home>,
        children: [
          {
            path: '/',
            loader: () => fetch('../products.json'),
            element: <Cards></Cards>
          },
          {
            path: '/category/:category',
            loader: () => fetch('../products.json'),
            element: <Cards></Cards>
          },
        ],
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);