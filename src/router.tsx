import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "./common/layouts/MainLayout";
import { About } from "./features/About/About";
import { Dashboard } from "./features/Dashboard/Dashboard";

export enum AppRoutes {
  dashboard = "/",
  about = "/about",
}

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: AppRoutes.dashboard,
        element: <Dashboard />,
      },
      {
        path: AppRoutes.about,
        element: <About />,
      },
    ],
  },
]);
