module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/typescript/recommended",
    "@vue/prettier",
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "warn" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "warn" : "off",
    "@typescript-eslint/no-var-requires": "off", // 导入node模块提示找不的问题
    "@typescript-eslint/no-empty-function": "off",
    "vue/multi-word-component-names": "off",
    "vue/no-reserved-component-names": "off",
    "linebreak-style": ["warn", "unix"],
  },
};
