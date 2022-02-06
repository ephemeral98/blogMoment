export default [
  {
    name: '首页',
    path: '/',
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
        redirect: '/user'
      }
    ],
  },
  { path: '/login', component: '@/pages/Login' },
];
