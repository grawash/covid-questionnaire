import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "../pages/WelcomeView.vue";
import QuestionnaireTemplate from "../pages/QuestionnaireTemplate.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: WelcomeView,
    },
    {
      path: "/questionnaire",
      name: "questionnaire",
      component: () => QuestionnaireTemplate,
      children: [
        {
          name: "personal-info",
          path: "personal-info",
          component: () => import("../pages/PersonalInfo.vue"),
        },
        {
          name: "covid-status",
          path: "covid-status",
          component: () => import("../pages/PersonalInfo.vue"),
        },
      ],
    },
    {
      path: "/about",
      name: "about",
    },
  ],
});

export default router;
