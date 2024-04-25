import Home from "../pages/home/Home.vue"
import Mine from "../pages/mine/Mine.vue"
import NotFound from "../pages/not-found/NotFound.vue"




const routes = [
  {
    path: '/',
    title: '首页',
    component: Home
  },
  {
    path: '/mine', component: Mine
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  },
]

export default routes