import Vue from "vue";
import "./plugins/axios";
import App from "./App.vue";
import VueResource from "vue-resource";
import vuetify from "./plugins/vuetify";
import VueRouter from "vue-router";

import router from "./Router/Route";
import store from "./store";

Vue.config.productionTip = false;
Vue.use(VueResource);
Vue.use(VueRouter);
Vue.http.options.root = "https://vue-js-4d056.firebaseio.com";
Vue.http.interceptors.push((request, next) => {
  if (request.method == "POST") {
    //TODO do something
  }

  next((response) => {
    response.json = () => {
      return {
        message: response.body,
      };
    };
  });
});

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
