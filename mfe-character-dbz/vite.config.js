import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "dbz",
      filename: "remoteEntry.js",
      exposes: {
        "./dbzApp": "./src/DbzApp.jsx",
      },
      shared: ["react", "react-dom"],
    }),
  ],
  server: {
    port: 5174,
  },
  build: {
    target: "esnext",
  },
});
