import Vue from "vue";
import VueRouter from "vue-router";

import KanbanBoard from "@/components/KanbanBoard.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: KanbanBoard,
    children: [
      {
        path: "task/:id",
        name: "task",
        component: () =>
          import(/* webpackChunkName: "about" */ "@/views/Task.vue")
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
