import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layouts/Layout";
import Statistics from "./pages/Statistics";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Cards from "./components/Cards";
import ErrorElement from "./Error/ErrorElement";
import ProductDetails from "./components/productDetails";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout></Layout>,
    errorElement: <ErrorElement></ErrorElement>,
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
        path: '/product/:product_id',
        loader: () => fetch('../products.json'),
        element: <ProductDetails></ProductDetails>
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        loader: () => fetch('../products.json'),
        element: <Dashboard></Dashboard>
      },
    ]
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster/>
  </StrictMode>
);