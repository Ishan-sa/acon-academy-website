import path from "node:path";
import { defineConfig } from "vitest/config";

// Standalone Vitest config. The main vite.config.ts sets `root` to `client`
// (and loads Manus dev plugins we don't need for tests), so tests live in their
// own config rooted at the project so both client/ and shared/ are discovered.
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
    },
  },
  test: {
    environment: "node",
    include: ["client/src/**/*.{test,spec}.{ts,tsx}", "shared/**/*.{test,spec}.ts"],
  },
});
