module.exports = {
  root: true,
  parserOptions: {
    parser: "babel-eslint",
    sourceType: "module",
  },
  extends: ["plugin:vue/recommended", "prettier", "prettier/vue"],
  rules: {
    // Only allow debugger in development
    "no-debugger": process.env.PRE_COMMIT ? "error" : "off",

    // Only allow `console.log` in development
    "no-console": process.env.PRE_COMMIT ? ["error", { allow: ["warn", "error"] }] : "off",

    "vue/component-name-in-template-casing": [
      "error",
      "PascalCase",
      {
        ignores: ["component", "template", "transition", "transition-group", "keep-alive", "slot"],
      },
    ],
  },
};
