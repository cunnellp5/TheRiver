import antfu from "@antfu/eslint-config";

export default antfu({
  typescript: true,
  svelte: true,
  formatters: {
    css: true,
  },
  stylistic: {
    quotes: "double",
    semi: true,
    indent: 2,
  },
  rules: {
    "unicorn/filename-case": [
      "error",
      {
        case: "kebabCase",
        ignore: ["README.md"],
      },
    ],
  },
  ignores: [
    ".DS_Store",
    "node_modules",
    "/build",
    "/.svelte-kit",
    "/package",
    ".env",
    ".env.*",
    "!.env.example",
    "pnpm-lock.yaml",
    "package-lock.json",
    "yarn.lock",
  ],
});
