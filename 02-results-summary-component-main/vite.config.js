import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/fm-react-scaffold/02-results-summary-component-main/",
  plugins: [react()],
});
