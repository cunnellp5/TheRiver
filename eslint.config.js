import antfu from "@antfu/eslint-config";

export default antfu({
  typescript: true,
  svelte: true,
  formatters: {
    css: true,
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
});
