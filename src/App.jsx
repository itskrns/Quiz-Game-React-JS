import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login";
import Game from "./pages/Game";
import Result from "./pages/Result";
import AppLayout from "./ui/AppLayout";
import Error from "./ui/Error";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/quiz", element: <Game /> },
      { path: "/result", element: <Result /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
