import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import PlayingBar from "./PlayingBar";
import Sidebar from "./SideBar";

export default function DefaultLayout() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Sidebar />
      <Outlet />
      <PlayingBar />
    </div>
  );
}
