import { RouteRecordRaw, createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Explore from "@/views/Explore.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/explore/:id",
    name: "Top Gainers",
    component: Explore,
  },
];
const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
