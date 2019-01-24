# Troubleshooting

These are some troubleshooting tips for more common issues people might run into while developing, including more information on what might be happening and how to fix the problem.

## Errors running scripts (e.g. npm run dev)

Make sure you've followed the instructions for [Setup and development](./development.md). If you already have, try deleting the `node_modules` folder and installing fresh:

```bash
# 1. Delete all previously-installed dependencies.
rm -rf node_modules

# 2. Install dependencies fresh.
npm install
```

If that doesn't work, it's possible that a codechange is creating a problem. If that's the case, try undoing all changes in the application, or stash your changes by using `git stash`.

If that still didn't help, [open an issue](https://github.com/directus/app/issues/new) to get help from others.
