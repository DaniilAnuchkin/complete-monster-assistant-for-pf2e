import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.scss";
import "./styles/normalize.scss";
import "@ant-design/v5-patch-for-react-19";
import App from "./App";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
