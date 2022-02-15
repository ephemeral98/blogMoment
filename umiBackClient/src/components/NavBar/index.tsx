import style from './index.less';
import { useState } from 'react';
import { history } from 'umi';

export default () => {
  const [navList, setNavList] = useState([]);
  return (
    <div className={style.nav_wrap}>
      {/* 用户管理 */}
      <div
        onClick={() => {
          history.push('/home/user');
        }}
        className={style.navItem}
      >
        <i className={`${style.icon} iconfont icon-user`}></i>
        <div className={style.text}>用户管理</div>
      </div>

      {/* 评论管理 */}
      <div
        onClick={() => {
          history.push('/home/comments');
        }}
        className={style.navItem}
      >
        <i className={`${style.icon} iconfont icon-comment`}></i>
        <div className={style.text}>评论管理</div>
      </div>

      {/* 文章管理 */}
      <div
        onClick={() => {
          history.push('/home/articleList');
        }}
        className={style.navItem}
      >
        <i className={`${style.icon} iconfont icon-article`}></i>
        <div className={style.text}>文章管理</div>
      </div>
    </div>
  );
};
