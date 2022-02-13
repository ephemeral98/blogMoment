export default [
  { path: '/login', component: '@/pages/Login' },
  {
    name: '首页',
    path: '/',
    component: '@/pages/Page',
    routes: [
      {
        path: 'home',
        component: '@/pages/Home',
        routes: [
          {
            path: 'user',
            component: '@/pages/Home/UserList',
          },
          {
            path: 'comments',
            component: '@/pages/Home/CommentList',
          },
          {
            redirect: 'user',
          },
        ],
      },
      {
        path: 'userDetail',
        component: '@/pages/UserDetail',
      },
      {
        path: 'articleDetail',
        component: '@/pages/ArticleDetail',
      },
      {
        redirect: 'home/user',
      },
    ],
    // redirect: '/home/user',
  },
];
