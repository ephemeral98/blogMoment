// 用户详情页
import css from './index.less';
import SearchBar from '@cps/SearchBar';
import ArticleList from '@cps/ArticleList';
import TagList from '@cps/TagList';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

export default function UserDetail() {
  function callback(key: any) {
    console.log(key);
  }

  return (
    <div className={css.user_detail_wrap}>
      <button className={css.del_btn}>
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
            荣获<span className={css.like_num}>4399</span>个like
          </div>
        </div>
        {/* 主体 */}
        <section className={css.main}>
          <Tabs defaultActiveKey="1" onChange={callback}>
            <TabPane tab="文章列表" key="1">
              <ArticleList />
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
