import { createRouter, createWebHistory } from "vue-router";
import WelcomeView from "@/pages/WelcomeView.vue";
import QuestionnaireTemplate from "@/pages/QuestionnaireTemplate.vue";
import PersonalInfo from "@/pages/PersonalInfo.vue";
import CovidStatus from "@/pages/CovidStatus.vue";
import VaccineInfo from "@/pages/VaccineInfo.vue";
import FeedbackPage from "@/pages/FeedbackPage.vue";

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
      component: QuestionnaireTemplate,
      children: [
        {
          name: "personal-info",
          path: "personal-info",
          component: PersonalInfo,
        },
        {
          name: "covid-status",
          path: "covid-status",
          component: CovidStatus,
        },
        {
          name: "vaccine-info",
          path: "vaccine-info",
          component: VaccineInfo,
        },
        {
          name: "feedback",
          path: "feedback",
          component: FeedbackPage,
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
