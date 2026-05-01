import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import NarutoApp from "./NarutoApp.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NarutoAppApp />
  </StrictMode>,
);
