# Setup & Development

- First-time setup
- Installation
- Dev server
  - Developing with the production API
- Globals

## First-time setup

Make sure you have the following installed:

- [NodeJS](https://nodejs.org/en/) (LTS or newer)

It can help to have [the API](https://github.com/directus/api) installed locally as well, to be able to debug database values easier, but it's not required.

## Installation

```bash
# Install dependencies from package.json
npm install
```

## Dev Server

```bash
# Launch the dev server
npm run dev

# Launch the dev server and automatically open it in your default browser when ready
npm run dev --open
```

## Aliases

The following aliases are available to use in imports:

- `@`: `.`,
- `@src`: `src`,
- `@router`: `src/router`,
- `@views`: `src/router/views`,
- `@layouts`: `src/router/layouts`,
- `@components`: `src/components`,
- `@assets`: `src/assets`,
- `@utils`: `src/utils`,
- `@state`: `src/state`,
- `@design`: `src/design/index.scss`

This allows you to keep import statements nice and concise:

```js
import BaseInput from "@components/base-input.vue";

// vs

import BaseInput from "../../components/base-input.vue";
```

## Globals

### Base Components

[Base components](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended) (a.k.a. presentational, dumb, or pure components) that apply app-specific styling and conventions should all begin with the `base-` prefix. Since these components are typically used in place of raw HTML element (and thus used as frequently), they're automatically globally registered for convenience. This means you don't have to import and locally register them to use them in templates.
