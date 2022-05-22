// import StyledComponent from '@css/mixins';
import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import { message } from 'antd';

const LoginWrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #383838;
  position: relative;

  .login_container {
    width: 5rem;
    height: 5rem;
    background-color: #7575754b;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 0.2rem;
    display: flex;
    justify-content: center;
    align-items: center;

    input {
      border: none;
      padding: 0.05rem 0.15rem;
      border-radius: 0.05rem;
      font-size: 0.18rem;
    }

    .login_btn {
      width: 0.85rem;
      height: 0.5rem;
      transition: all 1s;
      border-radius: 0.1rem;
      font-size: 0.2rem;

      &:hover {
        background-color: #008c8c;
        color: #fff;
      }
    }
  }
`;
export default () => {
  const navigate = useNavigate();
  const [adminInp, setAdminInp] = useState('' as any); // 输入框账号
  const [pwdInp, setPwdInp] = useState('' as any); // 输入框密码

  function handleLogin() {
    if (adminInp === '123' && pwdInp === '345') {
      message.success('登录成功');
      navigate('/');
    } else {
      message.error('密码错误');
    }
  }

  return (
    <LoginWrap>
      <div className="login_container">
        <div className="login_box">
          <p>
            <input
              type="text"
              placeholder="请输入账号"
              value={adminInp}
              onChange={(e) => {
                setAdminInp(e.target.value);
              }}
            />
          </p>
          <p>
            <input
              type="text"
              placeholder="请输入密码"
              value={pwdInp}
              onChange={(e) => {
                setPwdInp(e.target.value);
              }}
            />
          </p>
          <button className="login_btn" onClick={handleLogin}>
            登录
          </button>
        </div>
      </div>
    </LoginWrap>
  );
};
