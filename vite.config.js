import path from "path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        // target: "https://electric-keke-backend.vercel.app/api/v1",
        target: "https://electric-keke-backend.vercel.app",
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ""),
        rewrite: (path) => path.replace(/^\/api/, "/api/v1"),
      },
    },
  },
});

/**
 * 
 * import path from "path"
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000/api/v1",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

 */
