import React from "react";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div className="bg-gray-100">
      <div className="w-11/12 mx-auto">
       <Navbar></Navbar>
      </div>
        <div className="min-h-[calc(100vh+80px)]">
          <Outlet />
        </div>
      <Footer />
    </div>
  );
};

export default Layout;
