import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VModal from 'vue-js-modal'
import store from "./stores/store";
import i18n from "./plugins/i18n.js"
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import EnlargeableImage from '@diracleo/vue-enlargeable-image';
import { BootstrapVue, BootstrapVueIcons, DropdownPlugin } from "bootstrap-vue";

i18n.locale = "fr"

Vue.use(BootstrapVueIcons);
Vue.use(EnlargeableImage);
Vue.use(DropdownPlugin)
Vue.use(BootstrapVue);
Vue.use(VModal);
Vue.config.productionTip = false;

new Vue({
  store,
  router,
  i18n,
  render: (h) => h(App)
}).$mount("#app");
