import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import "./cv.css";
import App from "./App.tsx";
import OpenCCAEmail from "./SemesterProject/opencca_application/OpenCCAEmail.tsx";
import OpenCCACV from "./SemesterProject/opencca_application/OpenCCACV.tsx";
import FpgaQuantizedCV from "./SemesterProject/fpga_quantized/FpgaQuantizedCV.tsx";
import FpgaHttpCV from "./SemesterProject/fpga_http/FpgaHttpCV.tsx";

import AvatarMotionCV from "./SemesterProject/avatar_motion/AvatarMotionCV.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/avatar-motion/cv" element={<AvatarMotionCV />} />
        <Route path="/" element={<App />} />
        <Route path="/draft/classic" element={<Navigate to="/" replace />} />
        <Route path="/opencca" element={<OpenCCAEmail />} />
        <Route path="/opencca/cv" element={<OpenCCACV />} />
        <Route path="/fpga-quantized/cv" element={<FpgaQuantizedCV />} />
        <Route path="/fpga-http/cv" element={<FpgaHttpCV />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
