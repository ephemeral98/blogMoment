// 用户详情页
import css from './index.less';
import SearchBar from '@cps/SearchBar';
import Articles from '@cps/Articles';
import TagList from '@cps/TagList';
import { Tabs, Menu, Dropdown } from 'antd';
import { useState } from 'react';
const { TabPane } = Tabs;

export default function UserDetail() {
  // 切换列表
  function handleCurList(key: any) {
    console.log(key);
  }

  const [curMenu, setCurMenu] = useState([
    {
      id: 1,
      text: '按时间排序',
      actice: false,
    },
    {
      id: 2,
      text: '按Like数排序',
      actice: true,
    },
    {
      id: 3,
      text: '按评论数排序',
      active: false,
    },
  ]);

  /**
   * 选择下拉菜单排序
   * @param item 选中的菜单
   */
  function pickMenu(item: any) {
    const newList = curMenu.map((m) => {
      if (m.id == item.key) {
        m.actice = true;
      } else {
        m.actice = false;
      }
      return m;
    });

    setCurMenu(newList);
  }

  // 下拉菜单
  const menu = (
    <Menu onClick={pickMenu}>
      {curMenu.map((item) => {
        return <Menu.Item key={item.id}>{item.text}</Menu.Item>;
      })}
    </Menu>
  );

  const activeMenu = curMenu.find((cur) => cur.actice);

  return (
    <div className={css.user_detail_wrap}>
      <button className={`${css.del_user_btn} del_btn`}>
        删除该用户
        <i className="iconfont icon-del"></i>
      </button>

      {/* 基本信息 */}
      <div className={css.base_infos}>
        <img
          src={require('@img/sziitView.jpg')}
          alt=""
          className={css.avatar}
        />
        <div>
          <div>昵称：BA_凌晨四点</div>
          <div>性别：男</div>
          <div>地点：广州市</div>
          <div>注册时间：2020.11.15</div>
          <div>最近一次登录时间：2022.11.23</div>
          <div>闭起双眼你最挂念谁，眼睛撑开身边竟是谁?</div>
        </div>
      </div>

      {/* 文章信息 */}
      <div className={css.art_infos}>
        {/* 头部 */}
        <div className={css.head}>
          <SearchBar />
          <div className={css.like_container}>
            荣获<span className={css.like_num}>4399</span>个Like
          </div>
          <button className="del_btn">
            批量删除文章
            <i className="iconfont icon-del"></i>
          </button>
        </div>
        {/* 主体 */}
        <section className={css.main}>
          {/* 下拉框 */}
          <Dropdown arrow={true} overlay={menu} trigger={['click']}>
            <a className={css.order_panel} onClick={(e) => e.preventDefault()}>
              {activeMenu?.text}
            </a>
          </Dropdown>

          {/* 列表 */}
          <Tabs defaultActiveKey="1" onChange={handleCurList}>
            <TabPane tab="文章列表" key="1">
              <Articles />
              <Articles />
              <Articles />
              <Articles />
            </TabPane>
            <TabPane tab="标签列表" key="2">
              <TagList />
            </TabPane>
          </Tabs>
        </section>
      </div>
    </div>
  );
}
