import React from "react";
import Header from "./Header";
import PlayingBar from "./PlayingBar";
import Sidebar from "./SideBar";
export default function DefaultLayout({ children }) {
  return (
    <div className="overflow-hidden">
      <Header />
      <Sidebar />
      {children}
      <PlayingBar />
    </div>
  );
}
