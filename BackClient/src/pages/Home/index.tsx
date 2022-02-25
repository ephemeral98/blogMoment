import { useEffect, useState } from 'react';
import SearchBar from '@cps/SearchBar';
import css from './index.module.less';
// import { IUserListType } from '@/models/TableListType';
import * as router from 'react-router';
import { Route, Switch, Link } from 'react-router-dom';

import TestPage from '@/pages/TestPage';
import TestComp from '@/components/TestComp';
import { IRoute } from '@/router/config';
import { systemRouteList } from '@/router/utils';

export default function Home(props: any) {
  const his = router.useHistory();

  const [disabled, setDisabled] = useState(false);
  const [curPathName, setCurPathName] = useState('');
  // const { pathname } = history.location;
  const pathname = '/user';

  // 监听路由变化
  useEffect(() => {
    console.log('dadasssss', systemRouteList);
    /* switch (pathname) {
      case '/user':
        setCurPathName('用户管理');
        break;
      case '/comments':
        setCurPathName('评论管理');
      case '/articles':
        setCurPathName('文章管理');
        break;
    } */
    setCurPathName('用户管理');
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
      <div className={css.container}>
        this is content:
        {/* <Switch> */}
          {systemRouteList.map((menu: IRoute) => (
            <Route exact key={menu.path} path="/test" component={TestPage}></Route>
          ))}
          {/* <Route path='/test' component={TestPage}></Route> */}
        {/* </Switch> */}
      </div>
    </div>
  );
}
