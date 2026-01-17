import type { Config } from "@react-router/dev/config";

export default {
  // SPA mode for cPanel hosting (static files only)
  ssr: false,

  // Pre-render the home page for SEO
  async prerender() {
    return ["/"];
  },
} satisfies Config;
