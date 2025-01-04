import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import TsconfigPathsPlugin from 'vite-plugin-tsconfig-paths';
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [react(), TsconfigPathsPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: 'node_modules/pdfjs-dist/legacy/build/pdf.worker.min.mjs',
          dest: 'assets/pdfjs',
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});