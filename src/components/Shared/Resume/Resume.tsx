"use client";

import React, { useEffect, useState } from "react";
import { FaSpinner, FaDownload } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { useResumeStore } from "@/store/useResumeStore";

const resumeFile = "/Jahid-CV.pdf";

const Resume: React.FC = () => {
  const { showPreview, closeResume } = useResumeStore();
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (showPreview) {
      setLoading(true);
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [showPreview]);

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && showPreview) {
        closeResume();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showPreview, closeResume]);

  const handleDownload = async () => {
    try {
      const res = await fetch(resumeFile);
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "Jahid-CV.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    } catch (err) {
      console.error("Failed to download resume:", err);
    }
  };

  if (!showPreview) return null;

  return (
    <div
      className="fixed inset-0 z-[100] w-screen h-[100dvh] bg-base-100 flex flex-col overflow-hidden"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Full Viewport Header */}
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 bg-accent text-base-100 shadow-md shrink-0">
        <div className="flex items-center gap-3">
          <h2 className="text-base sm:text-xl font-bold tracking-wide">
            Jahid Hossen — Resume
          </h2>
          <span className="hidden sm:inline-block badge badge-neutral text-xs font-medium">
            PDF Preview
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm btn-ghost text-base-100 hover:bg-black/20 flex items-center gap-1.5"
            title="Open in new tab"
          >
            <HiOutlineExternalLink size={18} />
            <span className="hidden sm:inline">Open in Tab</span>
          </a>

          <button
            onClick={handleDownload}
            className="btn btn-sm bg-base-100 text-accent hover:bg-base-200 border-0 flex items-center gap-1.5 font-semibold"
          >
            <FaDownload size={13} />
            <span>Download</span>
          </button>

          <button
            onClick={closeResume}
            className="btn btn-sm btn-circle btn-ghost text-base-100 hover:bg-black/20 text-xl font-bold cursor-pointer"
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>
      </div>

      {/* PDF Viewer - Takes remaining full viewport height */}
      <div className="relative flex-1 w-full bg-base-200 flex items-center justify-center overflow-hidden">
        {loading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-accent bg-base-200/90 z-20">
            <FaSpinner className="animate-spin text-4xl" />
            <span className="font-medium text-base">Loading Resume PDF...</span>
          </div>
        )}
        <iframe
          src={`${resumeFile}#toolbar=1&navpanes=0&scrollbar=1`}
          title="Resume Full Viewport Preview"
          className="w-full h-full border-0"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  );
};

export default Resume;
