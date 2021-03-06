import React from 'react';
import { Navigate } from 'react-router-dom';
import * as nav from 'react-router-dom';

import Guard from './Guard';

let handleRouteBefore = null;

// 设置路由导航守卫函数
function setRouteBefore(fn) {
  handleRouteBefore = fn;
}

// 路由懒加载
function lazyLoad(importFn, meta) {
  meta = meta || {};
  const Element = React.lazy(importFn);
  const lazyElement = (
    <React.Suspense>
      <Element _meta={meta} />
    </React.Suspense>
  );

  return <Guard element={lazyElement} meta={meta} handleRouteBefore={handleRouteBefore} />;
}

// 路由配置列表数据转换
function transformRoutes(routes) {
  const list = [];
  routes.forEach((route) => {
    console.log('打印一下router...', route);
    const obj = { ...route };
    if (obj.redirect) {
      obj.element = <Navigate to={obj.redirect} replace={true} />;
    }
    if (obj.component) {
      obj.element = lazyLoad(obj.component, obj.meta);
    }
    if (obj.children) {
      obj.children = transformRoutes(obj.children);
    }
    if (obj.element) {
      obj.element = (
        <Guard element={obj.element} meta={obj.meta} handleRouteBefore={handleRouteBefore} />
      );
    }
    list.push(obj);
  });
  console.log('router list...', list);
  return list;
}

export { setRouteBefore, transformRoutes };
