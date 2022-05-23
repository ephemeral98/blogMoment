import { useSelector, useDispatch } from 'react-redux';
import User from './User';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default (props) => {
  let navigate = useNavigate();

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/user');
    }
  }, []);

  const resp = useSelector((state: any) => state.counter) as any;
  const dispatch = useDispatch();

  return (
    <div className="home-wrap">
      {/* <User /> */}
      <Outlet />
    </div>
  );
};
