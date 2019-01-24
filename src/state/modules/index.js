// Register each file in the modules folder as a Vuex module.
// Nested modules will mirror the directory hierarchy and modules are name-
// spaced as the camelCase equivalent of their file name

import camelCase from "lodash/camelCase";

const moduleCache = {};
const root = { modules: {} };

/**
 * Read all the files in the modules folder and namespace them all to the
 * root.modules object
 */
function updateModules() {
  // Require all module files
  const requireModule = require.context(
    // Search for files in the current directory.
    ".",
    // Search for files in subdirectories.
    true,
    // Include any .js files that are not this file
    /^((?!index).)*\.js$/
  );

  // For every Vuex module...
  requireModule.keys().forEach(createModule);

  /**
   * Get module contents and add them to the global root.modules object namespaced
   * based on the file name
   * @param  {String} filename Filename of the module
   */
  function createModule(fileName) {
    const moduleDefinition = requireModule(fileName);

    // Skip the module during hot reload if it refers to the same module definition
    // as the one we have cached.
    if (moduleCache[fileName] === moduleDefinition) return;

    // Update the module cache, for efficient hot reloading
    moduleCache[fileName] = moduleDefinition;

    // Get the module path as an array
    const modulePath = fileName
      // Remove the "./" from the beginning
      .replace(/^\.\//, "")
      // Remove the file extension from the end
      .replace(/\.\w+$/, "")
      // Split nested modules into an array path
      .split(/\//)
      // camelCase all module namespaces and names
      .map(camelCase);

    // Get the modules object for the current path
    const { modules } = getNamespace(root, modulePath);

    // Add the module to our modules object
    modules[modulePath.pop()] = {
      // modules are namespaced by default
      namespaced: true,
      ...moduleDefinition,
    };
  }

  // If the environment supports hot reloading...
  if (module.hot) {
    // Whenever any Vuex module is updated...
    module.hot.accept(requireModule.id, () => {
      // Update `root.modules` with the latest definitions.
      updateModules();
      // Trigger a hot update in the store.
      require("../store").default.hotUpdate({ modules: root.modules });
    });
  }
}

updateModules();

// Recursively get the namespace of a Vuex module, even if nested
function getNamespace(subtree, path) {
  if (path.length === 1) return subtree;

  const namespace = path.shift();
  subtree.modules[namespace] = {
    modules: {},
    ...subtree.modules[namespace],
  };

  return getNamespace(subtree.modules[namespace], path);
}

export default root.modules;
