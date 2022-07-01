import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
// import "tailwindcss/tailwind.css"
import GlobalStyle from '@/assets/css/GlobalStyled';

import '@css/tailwindcss.css';

// 初始化一些样式
import '@css/index.css';
import 'antd/dist/antd.css';
import './utils/initRem';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <Provider store={store}>
    <GlobalStyle></GlobalStyle>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>
);

reportWebVitals();
