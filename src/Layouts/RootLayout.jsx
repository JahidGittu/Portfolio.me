import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import ParticleBg from "../Components/Shared/ParticleBg";

const RootLayout = () => {
  return (
    <div className="relative min-h-screen bg-[#252734] ">
      {/* 🎯 Background Particles Fixed Behind Content */}
      <ParticleBg  />

      {/* 🎯 Main Content with Higher z-index */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 ">
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default RootLayout;
