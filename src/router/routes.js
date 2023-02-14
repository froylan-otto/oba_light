const routes = [
  {
    path: "/",
    component: () => import("layouts/LoginPage.vue"),
    /*children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]*/
  },

  {
    path: "/upload",
    component: () => import("layouts/MainLayout.vue"),
    children: [{ path: "", component: () => import("pages/UploadPage.vue") }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
