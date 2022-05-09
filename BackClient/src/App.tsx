import React from 'react';
import './App.css';
import { router } from '@/router';
import { useRoutes } from 'react-router';
import TabBar from './components/TabBar/index';

function App() {
  const element = useRoutes(router);
  return (
    <>
      <TabBar />;<div className="App">{element}</div>
    </>
  );
}

export default App;
