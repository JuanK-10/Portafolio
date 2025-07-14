import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/Main.css";
import "./styles/Navbar.css";
import "./styles/Hero.css";
import "./styles/About.css";
import "./styles/Projects.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
