import React from "react";
import Navbar from "../fragments/Navbar";
import Footer from "../fragments/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = ({ children }) => {
  return (
    <main className="w-full h-auto flex flex-col bg-slate-900">
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
};

export default RootLayout;
