import { useSelector, useDispatch } from 'react-redux';
import { incremented, asyncAdd, store, testApi } from '@/store/modules/couterStore';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

function width(size) {
  console.log('size....');
  return {
    fontSize: '50px',
  };
}

function fontSize_() {
  console.log('font ... size...');
}

export default () => {
  const TestWrap = styled.div``;

  const resp = useSelector((state: any) => state.counter) as any;
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(incremented());
  }

  const [a, setA] = useState(1);
  const [timer, setTimer] = useState(null);
  /* useEffect(() => {
    clearInterval(timer);
    const t = setInterval(() => {
      console.log('aaa', a);
      setA(a + 1);
    }, 1000);

    setTimer(t);
  }, [a]); */

  function asyncClick() {
    console.log('clic,..', store);
    // dispatch(asyncAdd());
    store.dispatch(incremented());
  }

  function handleAsyncThunk() {
    store.dispatch(testApi());
  }

  return (
    <TestWrap>
      test...page...{a}
      <div className="box w-2">hello,test box</div>
      <div>{resp.value}</div>
      <button onClick={handleAdd}>click</button>
      <button onClick={asyncClick}>async Click</button>
      <button onClick={handleAsyncThunk}>handleAsyncThunk</button>
      <div style={{ paddingBottom: '200px' }}></div>
    </TestWrap>
  );
};
