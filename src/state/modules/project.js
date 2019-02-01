/*
 * Information about the currently selected project, like name, logo, accent
 * color, etc.
 */

import axios from "axios";

export const state = {
  loading: false,
  error: null,

  url: null,
  project_name: null,
  project_logo: null,
};

export const mutations = {
  PROJECT_PENDING(state, url) {
    state.error = null;
    state.loading = true;
    state.url = url;
  },

  PROJECT_SUCCESS(state, { project_name, project_logo }) {
    state.error = null;
    state.loading = false;

    state.project_name = project_name;
    state.project_logo = project_logo;
  },

  PROJECT_FAILURE(state, error) {
    state.error = error;
    state.loading = false;

    state.project_name = null;
    state.project_logo = null;
  },
};

export const actions = {
  // Will be run automatically on app startup
  init({ commit, dispatch }) {
    commit("PROJECT_PENDING");
    dispatch("switch", getDefaultProject());
  },

  /*
   * Switch to the project by using the provided url
   */
  switch({ commit }, url) {
    commit("PROJECT_PENDING", url);

    return axios
      .get(url)
      .then((res) => res.data.data.api)
      .then((info) => commit("PROJECT_SUCCESS", info))
      .catch((error) => commit("PROJECT_FAILURE", error));
  },
};

// Private functions
// -----------------------------------------------------------------------------
function getDefaultProject() {
  const config = window.__DirectusConfig__;
  const projects = config.projects;

  return projects[0];
}
