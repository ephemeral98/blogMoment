import { useMemo } from 'react';
import './App.css';
import { router, onRouteBefore } from '@/router';
import { useRoutes, useLocation } from 'react-router';
import TabBar from './components/TabBar/index';
import { transformRoutes, setRouteBefore } from '@/router/RouterGuard';

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
      {isShowTabBar && <TabBar />}
      <div className="App">{elements}</div>
    </>
  );
}

export default App;
