// import StyledComponent from '@css/mixins';
import styled, { css } from 'styled-components';
import { flexPos } from '@/assets/css/mixins';

export default () => {
  let mixin = css`
    & {
      color: red;
      width: 100%;
      ${{
        position: 'absolute',
        left: '100px',
        top: '100px',
      }}
      .title {
        color: blue;
      }
      .content {
        font-size: ${(props) => props.fontSize};
        color: pink;
      }
    }
  `;

  const complexMixin = css`
    color: ${(props) => (props.whiteColor ? 'white' : 'black')};
  `;

  const StyledComp = styled.div`
    ${(props) => (props.complex ? mixin : 'color: blue;')};
    /* ${mixin} */
    ${flexPos}
  `;

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
        width: 0.85rem;
        height: 0.5rem;

        &:hover {
          background-color: #008c8c;
        }
      }
    }
  `;

  // const temp = <css></css>

  return (
    <LoginWrap>
      {/* <StyledComponent someCondition={{ fontSize: '30px' }}>lorem..</StyledComponent> */}
      <StyledComp complex={{ fontSize: '150px' }} fontSize={'200px'}>
        Lorem, ipsum dolor.
      </StyledComp>
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
