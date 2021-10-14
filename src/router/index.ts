import {
  createRouter,
  createWebHashHistory,
  createWebHistory,
  RouteRecordRaw,
} from "vue-router";
const Layout = () => import("../components/Layout.vue");
const home = () => import("../views/home/index.vue");
const notFind = () => import("../views/404.vue");

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "/home",
        name: "home",
        component: home,
        meta: {
          title: "home",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    component: notFind,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
