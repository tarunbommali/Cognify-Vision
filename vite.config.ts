import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

const workspaceRoot = path.resolve(import.meta.dirname);
const clientRoot = path.resolve(workspaceRoot, "client");
const distDir = path.resolve(workspaceRoot, "dist/public");

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(clientRoot, "src"),
      "@shared": path.resolve(workspaceRoot, "shared"),
      "@assets": path.resolve(workspaceRoot, "attached_assets"),
    },
  },
  root: clientRoot,
  build: {
    outDir: distDir,
    emptyOutDir: true,
  },
  server: {
    fs: {
      strict: true,
      deny: ["**/.*"],
    },
  },
});
