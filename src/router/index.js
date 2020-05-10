import Vue from 'vue';
import VueRouter from 'vue-router';
import Architect from '../components/Architect.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Architect',
    component: Architect,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
