// 登录页
import style from './index.less';
import { Checkbox } from 'antd';
import { useState } from 'react';

export default () => {
  let [userName, setUserName] = useState('');
  let [pwd, setPwd] = useState('');

  /**
   * 处理登录
   */
  function handleLogin() {
    console.log('login...', userName, pwd);
  }

  /**
   * 记住我
   */
  function rememberMe(e: any) {
    console.log(e.target.checked);
  }

  return (
    <div className={style.login_wrap}>
      {/* 背景层 */}
      <div className={`${style.bg}`}></div>
      {/* 表单 */}
      <div className={style.login_container}>
        <input
          type="text"
          placeholder="Username"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Password"
          value={pwd}
          onChange={(e) => {
            setPwd(e.target.value);
          }}
        />

        <div className={style.mark_container}>
          <Checkbox onChange={rememberMe} />
          <span style={{ marginLeft: '1vw' }}>Remember me</span>
        </div>

        <button onClick={handleLogin} className={style.login_btn}>
          Login
        </button>
      </div>
    </div>
  );
};
