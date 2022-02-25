import './App.css';
import '@css/index.less';
import React, { Suspense } from 'react';

import initRem from '@/utils/initRem';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '@/pages/Home/index';
import TestComp from '@/pages/TestPage/index';

import NavBar from '@cps/NavBar';
import UserList from '@/pages/Home/UserList';
import { layoutRouteList } from './router/utils';
import config from './config';
import { Spin } from 'antd';

initRem();
function App(props: any) {
  console.log('dada', layoutRouteList);

  return (
    <div className="App">
      <NavBar />
      <Suspense fallback={<Spin size="large" className="layout__loading" />}>
        <Router>
          <Switch>
            {layoutRouteList.map((route: any) => (
              <Route key={config.BASENAME + route.path} path={'/'} component={Home}></Route>
            ))}
          </Switch>
          {/* <Route path='/' component={Home}></Route> */}
        </Router>
      </Suspense>
    </div>
  );
}

export default App;
