import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddPersonPage from '../views/AddPersonPage.vue'
import EditPersonPage from '../views/EditPersonPage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/add-person',
    name: 'AddPerson',
    component: AddPersonPage
  },
  {
    path: '/edit-person/:_id',
    name: 'EditPerson',
    component: EditPersonPage
  },
  // {
  //   path: '/person/:_id',
  //   name: 'PersonDetails',
  //   component: PersonDetails,
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
