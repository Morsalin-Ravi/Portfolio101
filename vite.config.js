import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// For GitHub Pages deployment, uncomment and set your repo name:
// const isGitHubPages = process.env.GITHUB_PAGES === 'true';
// const base = isGitHubPages ? '/your-repo-name/' : '/';

export default defineConfig({
  // base: '/your-repo-name/', // Uncomment for GitHub Pages
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
    hmr: {
      port: 3000,
    },
  },
});
