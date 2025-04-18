import { defineConfig } from "vite";
import path from "path";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@sharedTypes": path.resolve(__dirname, "../sharedTypes"),
    },
  },
  plugins: [react()],
});
