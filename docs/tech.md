# Languages & Technologies

- [JavaScript](#javascript)
  - [Polyfills](#polyfills)
  - [Vue](#vue)
  - [Vue Router](#vue-router)
  - [Vuex (state management)](#vuex-state-management)
- [HTML](#html)
- [CSS](#css)
  - [SCSS](#scss)
  - [Importing global modules](#importing-global-modules)
  - [Referencing aliased asset URLs](#referencing-aliased-asset-urls)
  - [Design variables and tooling](#design-variables-and-tooling)
  - [Global CSS](#global-css)

## JavaScript

Our JavaScript is compiled by Babel, using the [`@vue/babel-preset-app`](https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/babel-preset-app) as a base configuration.

If you're new to features such as `const`, `let`, and `=>` (arrow functions), take some time to read about the following features in Babel's ES2015 guide:

- [Arrow functions](https://babeljs.io/learn-es2015/#ecmascript-2015-features-arrows-and-lexical-this)
- [Template literals](https://babeljs.io/learn-es2015/#ecmascript-2015-features-template-strings)
- [Destructuring](https://babeljs.io/learn-es2015/#ecmascript-2015-features-destructuring)
- [Spread operator](https://babeljs.io/learn-es2015/#ecmascript-2015-features-default-rest-spread)
- [`let`/`const`](https://babeljs.io/learn-es2015/#ecmascript-2015-features-let-const)
- [`for`...`of`](https://babeljs.io/learn-es2015/#ecmascript-2015-features-iterators-for-of)

Reading these sections alone will get you 99% of the way to mastering Babel code. It's also a good idea to read about Promises, if you don't yet feel comfortable with them. Here's a [good intro](https://developers.google.com/web/fundamentals/getting-started/primers/promises).

### Polyfills

This project uses Vue CLI's [modern mode](https://cli.vuejs.org/guide/browser-compatibility.html#modern-mode), which creates two bundles: one modern bundle targeting modern browsers that support [ES modules](https://jakearchibald.com/2017/es-modules-in-browsers/), and one legacy bundle targeting older browsers that do not.

For each bundle, polyfills for any JavaScript features you use are included based on the target bundle and supported browsers defined by `browserslist` in `package.json`.

### Vue

Since Vue is such a huge part of our app, I strongly recommend everyone read through at least the _Essentials_ of [Vue's guide](https://vuejs.org/v2/guide/).

### Vue Router

To understand how to manage pages with Vue Router, I recommend reading through the _Essentials_ of [those docs](https://router.vuejs.org/en/essentials/getting-started.html).

### Vuex (state management)

To wrap your head around our state management, I recommend reading through [those docs](https://vuex.vuejs.org/guide), starting at _What is Vuex?_ and stopping before _Application Architecture_. Then skip down and read [_Form Handling_](https://vuex.vuejs.org/en/forms.html) and [_Testing_](https://vuex.vuejs.org/en/testing.html). Finally, read about [state management in this application](./state.md).

## HTML

All HTML will exist in [`.vue` files](https://vuejs.org/v2/guide/single-file-components.html).

Since Vue has a chance to parse the HTML code before the browser does, we can do a few extra things that normally wouldn't be possible.

For example, any element or component can be self-closing:

```vue
<span class="dot" />
```

Will compile to

```vue
<span class="dot"></span>
```

This feature is especially useful when using components with long names, but no content:

```vue
<FileUploader
  title="Upload documents here"
  description="Max. upload size: 20MB"
  icon="folder-open"
/>
```

## CSS

For our styles, we're using SCSS and [Scoped CSS](https://vue-loader.vuejs.org/guide/scoped-css.html). This can be activated by adding the `lang="scss"` and `scoped` attributes to style tags in Vue components:

```vue
<style lang="scss" scoped>
/* Styles go here */
</style>
```

### SCSS

SCSS is a superset of CSS, meaning any valid CSS is _also_ valid SCSS. This allows you to easily copy properties from other sources, without having to reformat it. It also means you can stick to writing the CSS you're still comfortable with while you're learning to use more advanced SCSS features.

I specifically recommend reading about:

- [Variables](http://sass-lang.com/guide#topic-2)
- [Nesting](http://sass-lang.com/guide#topic-3)
- [Operators](http://sass-lang.com/guide#topic-8)

Just those features cover at least 95% of use cases.

### Importing global modules

To import files from `node_modules`, Webpack's [css-loader](https://github.com/webpack-contrib/css-loader) requires adding `~` to the beginning of a module name to denote that it's a global (not relative) file reference. For example:

```scss
@import "~nprogress/nprogress.css";
```

### Referencing aliased asset URLs

Similarly to importing global modules, referencing aliased assets also requires the `~` at the beginning of the name. For example:

```scss
background: url("~@assets/images/background.png");
```

### Design variables and tooling

All our [variables](https://sass-lang.com/guide#topic-2), [placeholder classes](https://sass-lang.com/guide#topic-7), [mixins](https://sass-lang.com/guide#topic-6), and other design tooling are in the `src/design` folder. Each of these files define variables, prefixed with the name of the file, then combined in `src/design/index.scss`. This combined file is aliased as `@design` for convenience and can be imported into SCSS using:

```scss
@import "@design";
```

This makes all our design variables available in your component or SCSS file.

> NOTE: The `src/design` folder should never contain code that compiles to actual CSS, as that CSS would be duplicated across every component the file is imported into.

### Global CSS

Typically, only [`src/app.vue`](../src/app.vue) should ever contain global CSS and even that should only include base element styles and utility classes.
