// @lovable.dev/vite-tanstack-config already includes TanStack Start, React,
// Tailwind, tsconfig paths, Nitro, VITE_* env injection, aliases, and Lovable
// preview safety plugins. The Netlify plugin is added for production deploys.
import netlify from "@netlify/vite-plugin-tanstack-start";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  plugins: [netlify()],
  tanstackStart: {
    server: { entry: "server" },
  },
  nitro: {
    preset: "netlify",
  },
});
