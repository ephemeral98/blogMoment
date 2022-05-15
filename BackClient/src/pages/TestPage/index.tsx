import { useSelector, useDispatch } from 'react-redux';
import { incremented, asyncAdd, store, testApi } from '@/store/modules/couterStore';

export default () => {
  const resp = useSelector((state: any) => state.counter) as any;
  const dispatch = useDispatch();

  function handleAdd() {
    dispatch(incremented());
  }

  function asyncClick() {
    console.log('clic,..', store);
    // dispatch(asyncAdd());
    store.dispatch(incremented());
  }

  function handleAsyncThunk() {
    store.dispatch(testApi());
  }

  return (
    <div>
      test...page...
      <div className="box">hello,test box</div>
      <div>{resp.value}</div>
      <button onClick={handleAdd}>click</button>
      <button onClick={asyncClick}>async Click</button>
      <button onClick={handleAsyncThunk}>handleAsyncThunk</button>
      <div style={{ paddingBottom: '200px' }}></div>
    </div>
  );
};
