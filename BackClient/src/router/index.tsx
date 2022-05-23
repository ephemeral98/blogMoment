import loadable from 'react-loadable'; //引入这个loadable，使用这个来加载路由
import Loading from '@cps/GlobalLoading/Loading';
import { Navigate, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

// 如果你是js就直接无视这个interface的定义
interface Router {
  name?: string;
  path: string;
  children?: Array<Router>;
  component: any;
}
const LoadingTip = () => (
  <div>
    <Loading />
  </div>
);
// 如果你是js就直接无视这个: Array<Router>的类型限定

// 首页
const Home = loadable({
  loader: () => import('@/pages/Home'), // 需要异步加载的路由
  loading: LoadingTip, // 这是一个的提示
});

// 用户页
const User = loadable({
  loader: () => import('@/pages/Home/User'), // 需要异步加载的路由
  loading: LoadingTip, // 这是一个的提示
});

// 统计页
const Statistics = loadable({
  loader: () => import('@/pages/Home/Statistics'), // 需要异步加载的路由
  loading: LoadingTip, // 这是一个的提示
});

// 神器页
const Artifact = loadable({
  loader: () => import('@/pages/Home/Artifact'), // 需要异步加载的路由
  loading: LoadingTip, // 这是一个的提示
});

// 登录页
const Login = loadable({
  loader: () => import('@/pages/Login'), // 需要异步加载的路由
  loading: LoadingTip, // 这是一个的提示
});

const Test = loadable({
  loader: () => import('@/pages/TestPage'), // 需要异步加载的路由
  loading: LoadingTip, // 这是一个的提示
});

const router = [
  {
    path: '/',
    element: <Home />,
    meta: {
      requireAuth: true,
    },
    children: [
      {
        path: 'user',
        element: <User />,
      },
      {
        path: 'statistics',
        element: <Statistics />,
      },
      {
        path: 'artifact',
        element: <Artifact />,
      },
    ],
  },
  {
    path: '/login',
    meta: {
      aaa: 'bb',
    },
    element: <Login />,
  },
  {
    path: '/testPage',
    element: <Test />,
  },
];

/**
 * @description: 全局路由拦截
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义meta字段
 * @return {string} 需要跳转到其他页时，就返回一个该页的path路径，或返回resolve该路径的promise对象
 */
const onRouteBefore = ({ pathname, meta }) => {
  console.log('befor...', pathname, meta);
  const userStore = {
    isLogin: true,
    isGotUserInfo: false,
  };

  // 动态修改页面title
  if (meta.title !== undefined) {
    document.title = meta.title;
  }
};

export { router, onRouteBefore };
