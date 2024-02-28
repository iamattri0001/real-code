import Nav from "@/components/dasbboard/Nav";
import Sidebar from "@/components/dasbboard/Sidebar";
import React from "react";

const Layout = ({ children }) => {
  return (
    <div className="relative w-screen min-h-screen flex items-center justify-center">
      <Nav />
      <Sidebar />
      {children}
    </div>
  );
};

export default Layout;
