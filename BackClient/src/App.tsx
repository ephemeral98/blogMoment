import { useMemo } from 'react';
import './App.css';
import { router, onRouteBefore } from '@/router';
import { useRoutes, useLocation } from 'react-router';
import TabBar from './components/TabBar/index';
import { transformRoutes, setRouteBefore } from '@/router/RouterGuard';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query';

// Create a client 全局禁用窗口焦点影响数据刷新
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  setRouteBefore(onRouteBefore);
  const elements = useRoutes(transformRoutes(router));
  // const element = useRoutes(router);
  const location = useLocation();

  // 是否展示侧边栏
  const isShowTabBar = useMemo(() => {
    return location.pathname !== '/login';
  }, [location.pathname]);
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {isShowTabBar && <TabBar />}
        <div className="App">{elements}</div>
      </QueryClientProvider>
    </>
  );
}

export default App;
