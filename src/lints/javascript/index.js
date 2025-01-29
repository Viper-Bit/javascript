export default {
  // https://eslint.org/docs/latest/rules/eqeqeq
  // Require the use of === and !==
  eqeqeq: ["warn"],

  // https://eslint.org/docs/latest/rules/curly
  // Enforce consistent brace style for all control statements
  curly: ["warn", "all"],

  // https://eslint.org/docs/latest/rules/no-restricted-imports
  // Disallow specified modules when loaded by import
  "no-restricted-imports": [
    "error",
    {
      patterns: [
        {
          regex: "^(node:)?process$",
          message: "Please dont import node:process."
        }
      ]
    }
  ]
};
