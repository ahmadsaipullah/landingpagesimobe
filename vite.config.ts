import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],

  // Build configuration for cPanel
  build: {
    // Output folder
    outDir: "build",

    // Use esbuild for minification (default, no extra install needed)
    minify: "esbuild",

    // No sourcemaps for production
    sourcemap: false,

    // Rollup options
    rollupOptions: {
      output: {
        // Asset file naming
        assetFileNames: "assets/[name]-[hash][extname]",
        chunkFileNames: "assets/[name]-[hash].js",
        entryFileNames: "assets/[name]-[hash].js",
      },
    },
  },

  // Base URL (root of domain)
  base: "/",
});
