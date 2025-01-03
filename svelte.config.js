import { preprocessMeltUI, sequence } from "@melt-ui/pp";
import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://kit.svelte.dev/docs/integrations#preprocessors
  preprocess: sequence([
    vitePreprocess(),
    preprocessMeltUI(), // add to the end!
  ]),

  kit: {
    adapter: adapter({
      runtime: "nodejs22.x",
    }),
    csp: {
      mode: "nonce",
      directives: {
        "default-src": ["self"],
        "script-src": [
          "self",
          "strict-dynamic",
        ],
        "style-src": ["self", "https://fonts.googleapis.com", "unsafe-inline"],
        "img-src": [
          "self",
          "https://res.cloudinary.com",
          "https://i.ytimg.com/",
          "data:",
          "https://api-postcards.designmodo.com",
        ],
        "font-src": ["self", "https://fonts.gstatic.com"],
        "connect-src": ["self"],
        "frame-src": ["self", "https://w.soundcloud.com"],
        "media-src": ["self", "https://res.cloudinary.com"],
        "object-src": ["none"],
        "base-uri": ["self"],
        "form-action": ["self"],
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
