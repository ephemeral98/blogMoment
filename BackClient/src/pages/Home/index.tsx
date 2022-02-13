import { useEffect, useState } from 'react';
import css from './index.less';
import SearchBar from '@cps/SearchBar';
import { connect } from 'dva';
import { history } from 'umi';
import { IUserListType } from '@/models/TableListType';

function Home(props: any) {
  const [disabled, setDisabled] = useState(false);
  const [curPathName, setCurPathName] = useState('');
  const { pathname } = history.location;

  // 监听路由变化
  useEffect(() => {
    switch (pathname) {
      case '/user':
        setCurPathName('用户管理');
        break;
      case '/comments':
        setCurPathName('评论管理');
      case '/articles':
        setCurPathName('文章管理');
        break;
    }
  }, [pathname]);

  /**
   * 批量删除操作
   */
  /* function handleDelMany(id: number) {
    const newList = props.userList.map((item: IUserListType) => {
      if (item.id === id) {
        item.checked = true;
      }
      return item;
    });

    props.handleDelMany(newList);
  } */

  return (
    <div className={css.home_wrap}>
      <div className={css.header}>
        <SearchBar />
        <div className={css.home_title}>{curPathName}</div>
        <button onClick={props.handleDelMany} className="del_btn">
          批量删除
          <i className="iconfont icon-del"></i>
        </button>
      </div>
      <section className={css.container}>
        {props.children}

        {/* 用户列表 */}
        {/* <UserList /> */}

        {/* 评论列表 */}
      </section>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    tableList: state.tableList,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    handleDelMany() {
      dispatch({
        type: 'tableList/delUser',
      });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
