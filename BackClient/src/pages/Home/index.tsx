import { useSelector, useDispatch } from 'react-redux';
import User from './User';
import { Outlet } from 'react-router-dom'

export default (props) => {
  const resp = useSelector((state: any) => state.counter) as any;
  const dispatch = useDispatch();

  return (
    <div className="home-wrap">
      {/* <User /> */}
      <Outlet />
    </div>
  );
};
