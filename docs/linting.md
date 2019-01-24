# Linting & Formatting

The project uses ESLint, Stylelint, Markdownlint, and Prettier to catch errors and avoid [bikeshedding](https://whatis.techtarget.com/definition/Parkinsons-law-of-triviality-bikeshedding) by enforcing a common code style.

## Languages

* **JavaScript** is linted by ESLint and formatted by Prettier
* **HTML** (also in `.vue` files) is linted by ESLint and formatted by Prettier
* **CSS* is linted by Stylelint and formatted by Prettier
* **Markdown** is linted by Markdownlint and formatted by Prettier
* **JSON** is formatted by Prettier

## Scripts

There are two different contexts in which the linters run.

### Terminal

```
# Lint all files, fixing most violations automatically
npm run fix
```

### Pre-commit

Staged files will be linted automatically before each commit.

## Configuration

The configuration for each of these tools are in the following config files:

* ESLint
  * .eslintrc.js
  * .eslintignore
* Stylelint
  * stylelint.config.js
* Markdownlint
  * .markdownlintrc
* Prettier
  * .prettierrc.js
  * prettierignore

We try to keep these configs out of package.json if possible. Having them all in package.json can make it _really_ packed which makes it hard to navigate.
