/*
 * Information about all the available projects, as configured in the config.js
 * file. On system load, this will fetch the public information for all the
 * projects.
 */

import axios from "axios";
import _ from "lodash";

const config = window.__DirectusConfig__;
const projectURLs = config.projects;

export const state = {
  data: [],
  current: null,
};

export const getters = {
  current(state) {
    return _.find(state.data, { url: state.current });
  },
};

export const mutations = {
  // Setup the initial structure of the state
  INIT(state) {
    // Create a state object for each possible project
    state.data = projectURLs.map((url) => ({
      url: url,
      loading: false,
      error: null,
      project_name: null,
      project_logo: null,
    }));

    // Set the current project to the first in the config file
    state.current = projectURLs[0];
  },

  // When the information about a single project is being fetched
  PROJECT_PENDING(state, url) {
    updateProject(state, url, { loading: true });
  },

  // When the info of a single project has been returned
  PROJECT_SUCCESS(state, { url, project_name, project_logo }) {
    updateProject(state, url, { project_name, project_logo, loading: false, error: null });
  },

  // When fetching the info of the project went wrong, or if the API instance itself
  // threw an error
  PROJECT_FAILURE(state, { url, error }) {
    updateProject(state, url, { error: error, loading: false });
  },

  // Set the currently in use API URL
  SET_CURRENT(state, url) {
    state.current = url;
  },
};

export const actions = {
  // Will be run automatically on app startup
  init({ commit, dispatch }) {
    commit("INIT");

    // For each of the project URLs, fetch the other required data (eg name, logo)
    projectURLs.forEach((url) => {
      commit("PROJECT_PENDING", url);

      return axios
        .get(url)
        .then((res) => res.data.data.api)
        .then((info) => commit("PROJECT_SUCCESS", { url, ...info }))
        .catch((error) => commit("PROJECT_FAILURE", { url, error }));
    });
  },

  // Set the currently in use API URL
  setCurrent({ commit }, url) {
    commit("SET_CURRENT", url);
  },
};

// Private functions
// -----------------------------------------------------------------------------

// Updates a single project in the store array based on the url
function updateProject(state, url, changes = {}) {
  state.data = state.data.map((project) => {
    if (project.url !== url) return project;

    return {
      ...project,
      ...changes,
    };
  });
}
