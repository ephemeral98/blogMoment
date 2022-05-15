import { useSelector, useDispatch } from 'react-redux';

export default () => {
  const resp = useSelector((state: any) => state.counter) as any;
  const dispatch = useDispatch();

  return (
    <div>
      home...page...
      <div className="box">hello,home box</div>
      <div>{resp.value}</div>
      <button></button>
    </div>
  );
};
