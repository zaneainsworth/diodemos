import "@fontsource/poppins";

import "./assets/main.css";

import { createApp } from "vue";

// Components
import vuetify from "./plugins/vuetify";
import App from "./App.vue";
import router from "./router/index.js";

const app = createApp(App);

import { StatusBar, Style } from "@capacitor/status-bar";

StatusBar.hide();

// Global property for the logo
app.config.globalProperties.$logotipo = "/Logotipo.png";

app.use(vuetify);
app.use(router);
app.mount("#app");
