import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VueRouter from 'vue-router'; // Global Vue
import { routes } from './routes';
import VeeValidate from 'vee-validate';

/* DIRECTIVES */
import Transform from './directives/Transform'; // carregar arquivo

Vue.use(VueResource);
Vue.use(VueRouter);
Vue.use(VeeValidate);

Vue.http.options.root = 'http://localhost:3000';

Vue.http.interceptors.push((req, next) => {

  // req.headers.set('Authorization', 'informação de segurança aqui');
  console.log("ligando com request.. ");

  next(res => {
    console.log('Lidando com a resposta');
    console.log(res.body);
  }); 
});

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