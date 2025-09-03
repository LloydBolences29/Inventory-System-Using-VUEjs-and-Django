import { createRouter, createWebHistory } from 'vue-router';
import Landing from '../page/Landing';


//creation of paths

const routes = [
     {
    path: '/',
    name: 'Landing',
    component: Landing,
  }

]

// 2. Create the router instance.
const router = createRouter({
  history: createWebHistory(), // Uses the browser's history API for clean URLs
  routes, // Short for `routes: routes`
});

// 3. Export the router instance to be used by the main app.
export default router;