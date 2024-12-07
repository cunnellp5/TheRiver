import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  // for more information about preprocessors
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter({
      runtime: "nodejs22.x",
    }),
    csp: {
      mode: "nonce",
      directives: {
        "default-src": ["self"], // Fallback for other directives
        "script-src": [
          "self",
          "https://va.vercel-scripts.com/v1/script.debug.js",
          "https://va.vercel-scripts.com/v1/speed-insights/script.debug.js",
          "https://vercel.live/_next-live/",
          "http://www.instagram.com",
          "https://www.instagram.com/the.river.beauty/embed/",
        ], // Allow scripts from self and inline scripts with nonce
        "style-src": ["self", "https://fonts.googleapis.com", "unsafe-inline"], // Allow styles from self and Google Fonts
        "img-src": [
          "self",
          "https://res.cloudinary.com",
          "https://i.ytimg.com/",
          "data:",
          "https://api-postcards.designmodo.com",
        ], // Allow images from self and Cloudinary
        "font-src": ["self", "https://fonts.gstatic.com"], // Allow fonts from self and Google Fonts
        "connect-src": ["self"], // Allow connections to self
        "frame-src": ["self", "https://w.soundcloud.com", "https://www.instagram.com/", "https://vercel.live/"], // Disallow iframes
        "media-src": ["self", "https://res.cloudinary.com"], // Allow media from self and Cloudinary
        "object-src": ["none"], // Disallow plugins
        "base-uri": ["self"], // Restrict base URI to self
        "form-action": ["self"], // Restrict form actions to self
      },
    },
    alias: {
      $lib: "./src/lib*",
    },
  },

  test: {
    // Jest like globals
    globals: true,
    environment: "jsdom",
    include: ["src/**/*.{test,spec}.ts"],
    // Extend jest-dom matchers
    setupFiles: ["./setup-test.ts"],
  },
};

export default config;
