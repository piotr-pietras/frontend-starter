import React from "react";
import { Outlet } from "react-router";
import { AppBar } from "../AppBar";

export const MainLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  );
};
