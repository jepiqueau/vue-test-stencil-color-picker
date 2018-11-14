import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { defineCustomElements as colorpicker } from "stencil-colorpicker/dist/loader";

Vue.config.productionTip = false;
Vue.config.ignoredElements = [/^ion-/];
Vue.config.ignoredElements = [/jeep-\w*/];

colorpicker(window);

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
