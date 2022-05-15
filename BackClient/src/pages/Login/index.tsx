import styled from 'styled-components';

export default () => {
  const LoginWrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: skyblue;
    position: relative;

    .login_container {
      width: 5rem;
      height: 5rem;
      background-color: pink;
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
        width: .85rem;
        height: .5rem;

        &:hover {
          background-color: #008c8c;
        }
      }
    }
  `;

  return (
    <LoginWrap>
      <div className="login_container">
        <div className="login_box">
          <p>
            <input type="text" placeholder="请输入账号" />
          </p>
          <p>
            <input type="text" placeholder="请输入密码" />
          </p>
          <button className="login_btn">登录</button>
        </div>
      </div>
    </LoginWrap>
  );
};
