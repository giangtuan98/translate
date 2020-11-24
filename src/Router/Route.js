import CreateUser from "../components/CreateUser.vue";
import ListUser from "../components/ListUser.vue";
import EditUser from "../components/EditUser.vue";
import VueRouter from "vue-router";

const routes = [
  {
    path: "/users/create",
    name: "user.create",
    component: CreateUser,
  },
  {
    path: "/users",
    name: "user.list",
    component: ListUser,
  },
  {
    path: "/users/:id/edit",
    name: "user.edit",
    component: EditUser,
    beforeEnter: (to, from, next) => {
      console.log("before enter");
      next();
    },
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }

    if (to.hash) {
      return { selector: to.hash };
    }
  },
});

router.beforeEach((to, from, next) => {
  console.log("before each");
  next();
});

export default router;
