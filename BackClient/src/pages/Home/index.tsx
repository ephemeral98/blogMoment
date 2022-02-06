import { useState } from 'react';
import css from './index.less';
import NavBar from '@cps/NavBar';
import SearchBar from '@cps/SearchBar';
import UserList from './UserList';

export default (props: any) => {
  let [disabled, setDisabled] = useState(false);
  return (
    <div className={css.home_wrap}>
      <NavBar />
      <section className={css.main}>
        <div className={css.header}>
          <SearchBar />
          <button className={css.del_many_btn}>批量删除</button>
        </div>
        <section className={css.container}>
          {props.children}

          {/* 用户列表 */}
          {/* <UserList /> */}

          {/* 评论列表 */}
        </section>
      </section>
    </div>
  );
};
