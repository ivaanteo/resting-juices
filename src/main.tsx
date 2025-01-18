import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Reservations from "./sections/ReservationSection.tsx";
import NavBar from "./components/NavBar";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/about"
          element={<div className="bg-darkPurple h-screen text-white">About</div>}
        />
        <Route path="/reserve" element={<Reservations />} />
        <Route
          path="/projects"
          element={
            <div className="bg-darkPurple h-screen text-white">Projects</div>
          }
        />
        <Route
          path="/menu"
          element={<div className="bg-darkPurple h-screen text-white">Menu</div>}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
