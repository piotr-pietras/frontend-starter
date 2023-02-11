import React from "react";
import { Link } from "react-router-dom";
import { AppRoutes } from "../router";

export const NavBar = () => {
  return (
    <div>
      <span>NavBar</span>
      <Link to={AppRoutes.dashboard}>To Dashboard</Link>
      <Link to={AppRoutes.about}>To About</Link>
    </div>
  );
};
