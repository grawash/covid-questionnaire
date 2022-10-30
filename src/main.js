import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";
import router from "./router";

import "./assets/tailwind.css";

const store = createStore({
  state() {
    return {
      pages: [
        "/",
        "personal-info",
        "covid-status",
        "vaccinated",
        "covid-policy",
      ],
    };
  },
  getters: {
    pageNames(state) {
      return state.pages;
    },
  },
});

const app = createApp(App);

app.use(router);
app.use(store);

app.mount("#app");
