import {createRouter, createWebHashHistory} from 'vue-router';
import Home from './components/pages/HomePage.vue';
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {path: '/', component: Home}
  ]
})