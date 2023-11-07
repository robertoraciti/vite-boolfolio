import { createApp } from "vue";
import "./assets/scss/styles.scss";

import { router } from "./router";

import App from "./App.vue";
import * as bootstrap from "bootstrap";

createApp(App).mount("#app").use(router);
