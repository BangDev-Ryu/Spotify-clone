import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import PlayingBar from "./PlayingBar";
import SideBar from "./SideBar";

export default function DefaultLayout() {
  return (
    <div className="overflow-hidden">
      <Header />
      <SideBar />
      <Outlet />
      <PlayingBar />
    </div>
  );
}