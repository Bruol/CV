import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import OpenCCAEmail from "./opencca_application/OpenCCAEmail.tsx";
import OpenCCACV from "./opencca_application/OpenCCACV.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/opencca" element={<OpenCCAEmail />} />
        <Route path="/opencca/cv" element={<OpenCCACV />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
