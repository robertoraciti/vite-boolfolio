import { createWebHistory, createRouter } from "vue-router";

import HomePage from "../pages/HomePage.vue";
import PortfolioPage from "../pages/PortfolioPage.vue";
import ProjectDetail from "../pages/ProjectDetail.vue";
import ProjectByTypology from "../pages/ProjectByTypology.vue";

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
      path: "/project/:id",
      component: ProjectDetail,
    },
    {
      name: "projects-by-typology",
      path: "/projects-by-typology/:id",
      component: ProjectByTypology,
    },
  ],
});

export { router };
