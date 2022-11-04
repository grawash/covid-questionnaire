import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      isValidated: false,
      data: {},
    };
  },
  mutations: {
    toggleValidity(state, status) {
      state.isValidated = status;
    },
    storeData(state, payload) {
      state.data = { ...state.data, ...payload };
    },
  },
  getters: {
    getValidity(state) {
      return state.isValidated;
    },
    getData(state) {
      return state.data;
    }
  },
});

export default store;
