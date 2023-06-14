import "./assets/main.scss";
import { createApp } from "vue";
import { registerSW } from "virtual:pwa-register";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";

registerSW({ imediate: true });

createApp(App).use(vuetify).mount("#app");
