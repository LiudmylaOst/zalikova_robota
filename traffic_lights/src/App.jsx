// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import ErrorPage from "./Pages/ErrorPage";
import Header from "./Header";
import TrafficLights from "./TrafficLights";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: ":direction",
        element: <TrafficLights />,
      },
    ],
  },
  {
    path: "/horizontal",
    element: (
      <>
        <Header />
        <TrafficLights initialOrientation="horizontal" />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/vertical",
    element: (
      <>
        <Header />
        <TrafficLights initialOrientation="vertical" />
      </>
    ),
    errorElement: <ErrorPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
