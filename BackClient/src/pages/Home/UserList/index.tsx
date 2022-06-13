import { useState } from 'react';
import styled from 'styled-components';
import { Checkbox } from 'antd';
import { useNavigate, useRoutes } from 'react-router-dom';
import Item from 'antd/lib/list/Item';
const UserWrap = styled.div`
  width: 100%;
  height: 100vh;
  @apply bg-cyan-100;

  .user_item  {
    width: 80%;
    @apply bg-cyan-200 p-0.5 rounded-sm flex justify-between overflow-auto;
    margin: 0.3rem auto 0;
    cursor: pointer;

    > div {
      background-color: pink;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 1; //行数
      -webkit-box-orient: vertical;

      &:not(:last-child) {
        border-right: solid 1px red;
      }
    }

    .checkbox {
      flex: 0 0 0.5rem;
    }

    .user_id {
      flex: 0 0 1rem;
    }

    .account {
      flex: 0 0 3rem;
    }

    .nick_name {
      flex: 0 0 5rem;
    }
  }
`;

export default () => {
  const navigate = useNavigate();
  const [userList, setUserList] = useState([
    {
      id: 1,
      account: 1256011725,
      nickName: 'Barry',
      active: false,
    },
    {
      id: 2,
      account: 3502969036,
      nickName: 'GZQ',
      active: false,
    },
  ]);

  /**
   * 跳转到用户详情页
   */
  function launchTo(item, e) {
    if (!e.target.className?.includes('launch')) return;

    console.log('item.account', item.account);
    navigate('/user/' + item.account);
  }

  /**
   * 批量删除用户
   */
  function deleteMany() {
    const ids = userList
      .map((item) => {
        if (item.active) {
          return item.id;
        }
      })
      .filter((item) => item);
    console.log('id...', ids);
  }

  const [searchTx, setSearchTx] = useState(''); // 搜索输入框
  /**
   * 筛选
   */
  function filterUser() {
    console.log('搜索：', searchTx);
  }

  return (
    <UserWrap>
      <header className="flex justify-between">
        <div></div>
        {/* 搜索框 */}
        <div className="search_wrap flex justify-center">
          <input
            value={searchTx}
            onChange={(e) => {
              setSearchTx(e.target.value);
            }}
            className="p-0.5 rounded-sm"
            type="text"
            placeholder="请输入账号或者昵称"
          />
          <button className="ml-1 px-1 rounded-sm" onClick={filterUser}>搜索</button>
        </div>

        {/* 批量删除按钮 */}
        <button className="rounded-sm px-1" onClick={deleteMany}>
          批量删除
        </button>
      </header>

      <div className="user_item">
        <div className="checkbox"></div>
        <div className="user_id">id</div>
        <div className="account">账号</div>
        <div className="nick_name">昵称</div>
      </div>

      {userList.map((item) => (
        <div
          className="user_item"
          key={item.id}
          onClick={(e) => {
            launchTo(item, e);
          }}
        >
          <div className="checkbox">
            <Checkbox
              checked={item.active}
              onChange={() => {
                const newList = userList.map((it) => {
                  if (item.id === it.id) {
                    it.active = !it.active;
                  }
                  return it;
                });
                setUserList(newList);
              }}
            />
          </div>
          <div className="user_id launch">{item.id}</div>
          <div className="account launch">{item.account}</div>
          <div className="nick_name launch">{item.nickName}</div>
        </div>
      ))}
    </UserWrap>
  );
};
