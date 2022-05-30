import { useParams } from 'react-router';
import styled from 'styled-components';
import { Tabs } from 'antd';
import Dynamic from './Dynamic';


const { TabPane } = Tabs;

const UserWrap = styled.div`
  .avatar {
    width: 2.5rem;
    height: 2.5rem;
    margin-right: 0.3rem;
    border-radius: 0.1rem;
    border: solid 1.5px #fff;
  }

  .user_info {
    flex: auto;
    > div {
      flex: 0 0 1;
    }

    .base_info {
      > div {
        &:not(:first-child) {
          @apply mt-1 bg-cyan-100;
        }

        > div:nth-child(2) {
          width: 3rem;
          background: red;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 3; //行数
          -webkit-box-orient: vertical;
        }
      }
    }
  }
`;

export default () => {
  const route = useParams();
  console.log('route...', route);
  const onChange = (key: string) => {
    console.log(key);
  };

  return (
    <UserWrap className="page-wrap">
      {/* 基础信息 */}
      <div className="flex mb-2">
        <img src={require('@img/holder.png')} alt="" className="avatar" />
        <div className="user_info flex justify-between">
          {/* 基本信息 */}
          <div className="base_info">
            <div className="flex">
              <div className="mr-1">账号</div>
              <div>123123123</div>
            </div>
            <div className="flex">
              <div className="mr-1">昵称</div>
              <div>123123123</div>
            </div>
            <div className="flex">
              <div className="mr-1">个性签名</div>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique molestiae
                aspernatur, impedit harum corporis dolorum possimus alias nemo reprehenderit nam
                quis facilis doloribus molestias explicabo, amet dignissimos tenetur exercitationem
                iure iusto numquam quisquam. Iusto eveniet libero possimus quibusdam veritatis harum
                eius modi architecto, earum quo est vero aliquam dolore neque, iste, excepturi fuga.
                Minus nulla cum id, vitae eveniet facilis qui dolor, velit repellat praesentium
                rerum placeat voluptatem sapiente, iusto laborum commodi! Fuga, aspernatur error
                cupiditate odit incidunt sapiente ducimus, tempore eaque quisquam quas hic vitae
                nobis in magni similique numquam eveniet aut. Hic ratione non eligendi consectetur a
                deleniti?
              </div>
            </div>
          </div>

          {/* 联系方式 */}
          <div className="contact_info">
            <div className="flex">
              <div className="mr-1">手机: </div>
              <div>123123123</div>
            </div>
            <div className="flex mt-1">
              <div className="mr-1">email: </div>
              <div>123123123</div>
            </div>
            <div className="flex mt-1">
              <div className="mr-1">QQ: </div>
              <div>123123123</div>
            </div>
            <div className="flex mt-1">
              <div className="mr-1">微信: </div>
              <div>123123123</div>
            </div>
            <div className="flex mt-1">
              <div className="mr-1">地址: </div>
              <div>广东</div>
            </div>
            <div className="flex mt-1">
              <div className="mr-1">最近一次登录: </div>
              <div>2022/11/15</div>
            </div>
          </div>
        </div>
      </div>

      {/* 作品社交信息 */}
      <Tabs defaultActiveKey="1" onChange={onChange}>
        <TabPane tab="动态" key="1">
          <Dynamic></Dynamic>
          <Dynamic></Dynamic>
          <Dynamic></Dynamic>
          <Dynamic></Dynamic>
        </TabPane>
        <TabPane tab="回答" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="文章" key="3">
          Content of Tab Pane 3
        </TabPane>
        <TabPane tab="收藏" key="4">
          Content of Tab Pane 4
        </TabPane>
        <TabPane tab="关注" key="5">
          Content of Tab Pane 5
        </TabPane>
      </Tabs>
    </UserWrap>
  );
};
