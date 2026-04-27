import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import EssaysPage from '@/pages/EssaysPage.vue';
import PostPage from '@/pages/PostPage.vue';
import FitnessPage from '@/pages/FitnessPage.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: HomePage },
    { path: '/essays', component: EssaysPage },
    { path: '/essays/:id', component: PostPage },
    { path: '/fitness', component: FitnessPage },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
