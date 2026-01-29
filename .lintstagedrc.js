module.exports = {
  // Lint and format TypeScript and JavaScript files
  "**/*.{js,jsx,ts,tsx}": ["eslint --fix", "prettier --write"],

  // Format JSON, CSS, and Markdown files
  "**/*.{json,css,scss,md,mdx}": ["prettier --write"],
};
