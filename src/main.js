import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as colorpicker } from "stencil-colorpicker/dist/loader";

import Ionic from "@ionic/vue";

Vue.use(Ionic);
Vue.config.ignoredElements = [/ion-\w*/];
Vue.config.ignoredElements = [/jeep-\w*/];

colorpicker(window);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
