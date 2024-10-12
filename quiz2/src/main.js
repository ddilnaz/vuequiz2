import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/HomePage.vue';
import UserDetails from './views/UserDetails.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/user/:id', component: UserDetails },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
