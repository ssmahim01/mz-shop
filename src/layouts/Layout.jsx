import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="w-11/12 mx-auto lg:px-10">
        <Navbar />
        <div className="min-h-[calc(100vh-420px)]">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
