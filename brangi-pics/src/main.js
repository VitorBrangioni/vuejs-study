import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'; // Global Vue
import { routes } from './routes';

/* DIRECTIVES */
import Transform from './directives/Transform'; // carregar arquivo

Vue.use(VueResource);
Vue.use(VueRouter);

Vue.http.options.root = 'http://localhost:3000';

const router = new VueRouter({
  routes,
  mode: 'history' // remover '#'
});

// Vue Instance
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});