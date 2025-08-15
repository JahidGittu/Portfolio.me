import React, { useState } from "react";
import Navbar from "../Components/Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import ParticleBg from "../Components/Shared/ParticleBg";
import Resume from "../Components/Shared/Resume/Resume";

const RootLayout = () => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#252734]">
      <ParticleBg />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <Navbar onResumeClick={() => setShowPreview(true)} />
        <main>
          <Outlet />
        </main>
        <Footer />
        <Resume showPreview={showPreview} setShowPreview={setShowPreview} />
      </div>
    </div>
  );
};

export default RootLayout;
