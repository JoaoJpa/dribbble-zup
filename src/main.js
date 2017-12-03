// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import('../node_modules/vuetify/dist/vuetify.min.css')
import Vue from 'vue'
import App from './app/App.vue'
import router from './router'
import Vuetify from 'vuetify'
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.use(Vuetify, {theme:{
    primary: '#2f2f2ffa',
    secondary: '#999',
    accent: '#8c9eff',
    error: '#b71c1c'
}});


Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
