import { useSelector, useDispatch } from 'react-redux';
import { incremented, asyncAdd, store, testApi } from '@/store/modules/couterStore';
import { _width, styled } from '@/assets/css/mixins';
import { useEffect, useState } from 'react';

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
  const TestWrap = styled.div`
    ${_width}
    ${width(20)}

    @media (min-width: 750px) and (max-width: 1280px) {
      ${fontSize_()}
    }
  `;

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
    <TestWrap
      w={['20px', '30px']}
      mw={['']}
      h={'30px'}
      f={{ s: '20px', w: 'bold' }}
      svw={{ w: '20' }}
    >
      test...page...{a}
      <div className="box">hello,test box</div>
      <div>{resp.value}</div>
      <button onClick={handleAdd}>click</button>
      <button onClick={asyncClick}>async Click</button>
      <button onClick={handleAsyncThunk}>handleAsyncThunk</button>
      <div style={{ paddingBottom: '200px' }}></div>
    </TestWrap>
  );
};
