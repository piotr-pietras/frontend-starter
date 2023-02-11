import React from "react";
import { Outlet } from "react-router";
import { AppBar } from "../AppBar";
import { NavBar } from "../NavBar";

export const MainLayout = () => {
  return (
    <div>
      <AppBar />
      <NavBar />
      <Outlet />
    </div>
  );
};
