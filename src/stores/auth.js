import { defineStore } from "pinia";
import { apiOas } from "boot/axios";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
  state: () => ({
    counter: 0,
    clientVersion: null,
    token: "",
    tokenOAS: "",
    refreshTokenOas: "",
    authenticated: false,
    authenticatedOAS: false,
    userName: "",
    role: "",
    notifications: 0,
    homePage: "",
    avatar: null,
    background: null,
  }),

  getters: {
    doubleCount(state) {
      return state.counter * 2;
    },
    getClientVersion: (state) => {
      return state.clientVersion;
    },
    getAvatar: (state) => {
      return state.avatar;
    },
    getBackground: (state) => {
      return state.background;
    },
    getHomePage: (state) => {
      return state.homePage;
    },
    getNotifications: (state) => {
      return state.notifications;
    },
    isAuthenticated: (state) => {
      return state.authenticated;
    },
    isAuthenticatedOAS: (state) => {
      return state.authenticatedOAS;
    },
    getToken: (state) => {
      return state.token;
    },
    getTokenOAS: (state) => {
      return state.tokenOAS;
    },
    getRefreshTokenOas: (state) => {
      return state.refreshTokenOas;
    },
    getUserName: (state) => {
      return state.userName;
    },
    getRole: (state) => {
      return state.role;
    },
  },

  actions: {
    increment() {
      this.counter++;
    },
    updateAppVersion(context, payload) {
      context.commit("setClientVersion", payload);
    },
    async loggearse(payload) {
      const output = await apiOas.post("/auth/login/", payload);
      const response = output.data;
    },

    async loginApiOas(context, payload) {
      const output = await apiOas.post("/auth/login/", payload);
      const response = output.data;
      if (response.access_token) {
        // new state of variables OAS
        const page = "reportsHome";
        console.log("Estas Dentro");
        context.commit("setUserName", response.user.username);
        context.commit("setRole", "MainUser");
        console.log("Si llega 2");
        context.commit("setHomePage", page);
        context.commit("setTokenOAS", response.access_token);
        context.commit("setAuthenticatedOAS", true);
        console.log("Si entra");
        apiOas.defaults.headers.common.Authorization =
          "Bearer " + response.access_token;
      }
      console.log("Logged succesfull");
    },
    logoutOas(context) {
      apiOas.post("/auth/logout/").then(() => {
        console.log("ByeBye oas");
      });
      context.commit("setTokenOAS", null);
      context.commit("setClientVersion", null);
      context.commit("setAvatar", null);
      context.commit("setBackground", null);
      context.commit("setToken", null);
      context.commit("setAuthenticatedOAS", false);
      context.commit("setNotifications", 0);
      context.commit("setHomePage", null);
      context.commit("setUserName", null);
      context.commit("setRole", null);
    },
    async refreshTokenOas(context) {
      try {
        const data = await apiOas.post("/auth/token/refresh/", {
          refresh: context.refreshTokenOas,
        });
        context.commit("setTokenOas", data.access);
      } catch (err) {
        console.log(err);
      }
    },
    async login(context, payload) {
      // LOGIN TO OAS
      // this.accesToken = this.$store.getters['xstore/getTokenOAS']
      // END LOGIN TO OAS
      const output = await api.post("/api/login", payload);
      const response = output.data;
      if (response.success) {
        context.commit("setAvatar", response.data.avatar);
        context.commit("setBackground", response.data.background);
        context.commit("setToken", response.data.token);
        context.commit("setUserName", response.data.name);
        context.commit("setRole", response.data.role);
        context.commit("setHomePage", response.data.role);
        context.commit("setAuthenticated", true);
      }
    },
    async updateNotifications(context) {
      const output = await api.get("/api/user/notifications");
      const response = output.data;
      if (!response.success) {
        return;
      }
      context.commit("setNotifications", response.data.notifications);
    },
    logout(context) {
      api.post("/api/logout").then(() => {
        console.log("ByeBye");
      });
      context.dispatch("logoutOas");
    },
    async register(context, payload) {
      console.log(payload);
      // const headers = { headers: { 'otto-api-key': 'Bearer Cedn1CCW.sDdGPiPF3GDNZLMPXRt2fxqzPMQo7dkh' } }
      const output = await apiOas.post("/auth/registration/", payload);
      console.log(output);
    },
    setClientVersion(state, value) {
      state.clientVersion = value;
    },
    setAvatar(state, value) {
      state.avatar = value;
    },
    setBackground(state, value) {
      state.background = value;
    },
    setHomePage(state, value) {
      let homePage;
      switch (value) {
        case "OTTITOAdmin":
          homePage = "usersHome";
          break;
        case "MainUser":
        default:
          homePage = "reportsHome";
          break;
      }
      state.homePage = homePage;
    },
    setNotifications(state, value) {
      state.notifications = value;
    },
    setRole(state, value) {
      state.role = value;
    },
    setUserName(state, userName) {
      state.userName = userName;
    },
    setToken(state, token) {
      state.token = token;
    },
    setTokenOAS(state, token) {
      state.tokenOAS = token;
    },
    setRefreshTokenOas(state, token) {
      state.refreshTokenOas = token;
    },
    setAuthenticated(state, value) {
      state.authenticated = value;
    },
    setAuthenticatedOAS(state, value) {
      state.authenticatedOAS = value;
    },
  },
  persist: true,
});
