// vai gerar um bundle novo e sera carregado somente quando necessario
// code splitting e lary loading
const Register = () => System.import('./components/register/Register.vue');

import Home from './components/home/Home.vue';

export const routes = [
    {path: '', name: "home", component: Home, title: 'Home'},
    {path: '/register', name: "register", component: Register , title: 'Register'},
    {path: '/register/:id', name: "update", component: Register , title: 'Register'}
];