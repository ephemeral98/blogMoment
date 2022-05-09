import React from 'react';
import loadable from 'react-loadable'; //引入这个loadable，使用这个来加载路由
import Loading from '@cps/GlobalLoading/Loading';

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

const router = [
  {
    path: '/',
    element: <Home />,
  },
];

export { router };
