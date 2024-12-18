import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import TsconfigPathsPlugin from 'vite-plugin-tsconfig-paths';

export default defineConfig({
  plugins: [react(),TsconfigPathsPlugin(),],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});