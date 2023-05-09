import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "../common/layouts/MainLayout";
import { About } from "../features/About/About";
import { Dashboard } from "../features/Dashboard/Dashboard";
import { AppRoutes } from "../routes";
import { TestFeature } from "../features/TestFeature/TestFeature";

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
      {
        path: AppRoutes.test,
        element: <TestFeature />,
      },
    ],
  },
]);
