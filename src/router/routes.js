
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/Main/Main.vue') },
      { path: '/about', component: () => import('src/pages/AboutMe.vue') },
      { path: '/team', component: () => import('src/pages/Team.vue') },
      { path: '/active', component: () => import('src/pages/Active.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
