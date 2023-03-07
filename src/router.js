import { createRouter, createWebHistory } from 'vue-router'
import UserEdit from "./components/UserEdit.vue";
import UsersList from "./components/UsersList.vue";
import UserDetails from "./components/UserDetails.vue";



const routes = [
  {
    path: "/edit/:id/",
    component: UserEdit,
    name: "edit-user"
  },
  {
    path: "/:id",
    component: UserDetails,
    name: "user-details"
  },
  {
    path: "/",
    component: UsersList,
    name: "users-list"
  }
];
  
const router = createRouter({
    history: createWebHistory(),
    routes
  })

export default router
