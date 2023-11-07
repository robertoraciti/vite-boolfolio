import { createApp } from "vue";
import "./assets/scss/styles.scss";
import * as bootstrap from "bootstrap";

import { router } from "./router";

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
