import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import i18n from "./language";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus)
  .use(i18n)
  .mount("#app");
