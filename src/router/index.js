import { createWebHistory, createRouter } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      name: "homepage",
      path: "/",
      component: HomePage,
    },
    {
      name: "portfolio",
      path: "/portfolio",
      component: PortfolioPage,
    },
    {
      name: "project-detail",
      path: "/project-detail",
      component: ProjectDetail,
    },
  ],
});

export { router };
