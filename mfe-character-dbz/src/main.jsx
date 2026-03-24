import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import DbzApp from "./DbzApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <DbzApp />
  </StrictMode>,
);
