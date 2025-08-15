import React, { useEffect, useState } from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import pdfWorker from "pdfjs-dist/build/pdf.worker.min.js";
import { FaSpinner } from "react-icons/fa6";

const resumeFile = "/Jahid-CV.pdf";

const Resume = ({ showPreview, setShowPreview }) => {
  const [pdfBlobUrl, setPdfBlobUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  useEffect(() => {
    let url;
    if (showPreview) {
      setLoading(true);
      fetch(resumeFile)
        .then(res => res.blob())
        .then(blob => {
          url = URL.createObjectURL(blob);
          setPdfBlobUrl(url);
        })
        .finally(() => setLoading(false));
    }

    return () => {
      if (url) {
        URL.revokeObjectURL(url);
        setPdfBlobUrl(null);
      }
      setLoading(false);
    };
  }, [showPreview]);

  const handleDownload = async () => {
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
  };

  if (!showPreview) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative w-[90%] max-w-5xl bg-base-100 border border-accent rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center p-4 bg-accent text-base-100">
          <h2 className="text-xl font-bold">My Resume</h2>
          <button
            onClick={() => setShowPreview(false)}
            className="text-2xl font-bold hover:text-secondary transition"
          >
            ✕
          </button>
        </div>

        {/* PDF Viewer with Loader */}
        <div className="h-[70vh] flex items-center justify-center bg-base-200">
          {loading && (
            <div className="flex flex-col items-center justify-center gap-2 text-accent">
              <FaSpinner className="animate-spin text-3xl" />
              <span>Loading PDF...</span>
            </div>
          )}

          {pdfBlobUrl && !loading && (
            <Worker workerUrl={pdfWorker}>
              <Viewer
                fileUrl={pdfBlobUrl}
                plugins={[defaultLayoutPluginInstance]}
                defaultScale={1.6}
              />
            </Worker>
          )}
        </div>

        {/* Footer Download Button */}
        <div className="flex justify-end p-4">
          <button
            onClick={handleDownload}
            className="btn btn-accent text-base-100 rounded-full flex items-center gap-2"
          >
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
