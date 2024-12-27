import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style/fontstyle.css";
import "./style/App.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import App from "./App.jsx";
import "./i18n";
import ReactDOM from "react-dom/client";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
