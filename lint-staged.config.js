module.exports = {
  "*.js": ["npm run fix:eslint", "npm run fix:prettier", "git add"],
  "{!(package)*.json,*.code-snippets,.*rc}": ["npm run fix:prettier --parser json", "git add"],
  "package.json": ["npm run fix:prettier", "git add"],
  "*.vue": ["npm run fix:eslint", "npm run fix:stylelint", "npm run fix:prettier", "git add"],
  "*.scss": ["npm run fix:stylelint", "npm run fix:prettier", "git add"],
  "*.md": ["npm run fix:markdownlint", "npm run fix:prettier", "git add"],
  "*.{png,jpeg,jpg,gif,svg}": ["imagemin-lint-staged", "git add"],
};
