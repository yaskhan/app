import SDK from "@directus/sdk-js";

const client = new SDK({
  storage: window.sessionStorage,
});

export default client;
