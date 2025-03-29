import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import imagemin from "vite-plugin-imagemin";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
