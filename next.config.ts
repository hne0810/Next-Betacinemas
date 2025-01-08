import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React Strict Mode
  eslint: {
    dirs: ['pages', 'utils'], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "args": "all",
        "argsIgnorePattern": "^_",
        "caughtErrors": "all",
        "caughtErrorsIgnorePattern": "^_",
        "destructuredArrayIgnorePattern": "^_",
        "varsIgnorePattern": "^_",
        "ignoreRestSiblings": true,
      },
    ],
    "jsx-a11y/alt-text": [ 2, {
            "elements": [ "img", "object", "area", "input[type=\"image\"]" ],
            "img": ["Image"],
            "object": ["Object"],
            "area": ["Area"],
            "input[type=\"image\"]": ["InputImage"]
          }],
    // Note: you must disable the base rule as it can report incorrect errors
    "no-unused-vars": "on", // Change to "off" to disable the base rule
  },
};

export default nextConfig;
