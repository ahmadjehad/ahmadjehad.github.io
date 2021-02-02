import { createRouter, createWebHistory } from "vue-router";
import Contact from "../views/Contact.vue";
import MyPortofolio from "../views/MyPortofolio.vue";

const routes = [
  {
    path: "/",
    name: "Contact",
    component: Contact
  },
  {
    path:"/portofolio",
    name:"My Portofolio",
    component: MyPortofolio
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
