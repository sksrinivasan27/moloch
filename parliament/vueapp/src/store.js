import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    hasAuth: false,
    loggedIn: false,
    refreshInterval: 15000
  },
  mutations: {
    setLoggedIn (state, value) {
      state.loggedIn = value;
    },
    setHasAuth (state, value) {
      state.hasAuth = value;
    },
    setRefreshInterval (state, value) {
      value = parseInt(value) || 0;
      localStorage.setItem('refreshInterval', value);
      state.refreshInterval = value;
    }
  }
});

export default store;
