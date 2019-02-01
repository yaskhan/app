# Design

// TODO: copy over the final variables into this reference

All of the CSS in the application should rely on the global CSS Custom Properties (variables) where applicible.

We're using Custom Properties to make sure that extensions have access to the variables without having to import another dependency, and to ensure that the user can override individual properties.

All the variables are defined in the [`design`](../src/design/) folder.

## Colors

The color names as used in the system. Parts of the system that need to be user-themeable should use abstracted names.

```css
.module-bar {
  background-color: var(--module-bar-bg);
}
```

This ensures we can change out the module bar background color by swapping out the value of `--module-bar-bg` with another color name, thus making it user themeable.

## Easing

Has to do with transitions and speeds, eg `--transition-in` or `--slow`.

```css
button {
  transition: color var(--fast) var(--transition);
}
```

## Fonts

Imports the font files and creates a `font` variable that contains the font stack.

## Layers

All the different layers the app includes. Components should never define a hardcoded z-index but should instead rely on the following layers:

// TODO: copy all layers

## Palette

The full color palette. By default, this is based on the material design color palette.

Components should never use "raw" color values (eg `#ff00ee` or `rgb(0, 0, 255)`) but should instead use colors from the palette: `var(--light-blue-300)`. This ensures that all the colors in the system fit with eachother.

## Sizes

// TODO

## Typography

// TODO
