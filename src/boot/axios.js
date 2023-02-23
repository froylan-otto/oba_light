import { boot } from "quasar/wrappers";
import axios from "axios";
import packageInfo from "../../package.json";

import { useCounterStore } from "src/stores/auth";

const apiOas = axios.create({
  baseURL: "https://oas-dev.ottomate.me/api",
});

const clientApiKey = "e5bc57dbbe3f84734735899958b73261a9fabb38";
export default boot(({ app, store }) => {
  const authStore = useCounterStore(store);
  console.log(authStore.isAuthenticatedOAS);

  // for use inside Vue files (Options API) through this.$axios and this.$api
  app.config.globalProperties.applicationVersion = packageInfo.version;
  app.config.globalProperties.apiOas = apiOas;
  app.config.globalProperties.apiOas.defaults.headers.get["Content-Type"] =
    "application/json";
  app.config.globalProperties.apiOas.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded";
  app.config.globalProperties.apiOas.defaults.headers.get.Accept =
    "application/json";
  app.config.globalProperties.apiOas.defaults.headers.common["otto-api-key"] =
    clientApiKey;

  if (authStore.isAuthenticatedOAS) {
    app.config.globalProperties.apiOas.defaults.headers.common.Authorization =
      "Bearer " + authStore.getTokenOAS;
  } else {
    console.log("Is not logged in");
  }
});

export { apiOas };
