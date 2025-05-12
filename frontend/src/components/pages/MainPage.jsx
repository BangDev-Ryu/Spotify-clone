import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import PlayingBar from "../layout/PlayingBar";
import Sidebar from "../layout/SideBar";

export default function MainPage() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Sidebar />
      <Outlet />
      <PlayingBar />
    </div>
  );
}
