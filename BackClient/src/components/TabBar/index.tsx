import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
interface ITab {
  id: number;
  name: string; // 名字
  icon: string; // 图标名字
  path: string; // 路由路径
  active: boolean; // 是否在该路由下
}

const TabBarWrap = styled.div`
  width: 0.5rem;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: #008c8c;
  transition: all 0.5s;

  &:hover {
    width: 0.9rem;

    .name {
      font-size: 0.18rem !important;
    }
  }

  .tab_item {
    @apply flex justify-center items-center;
    cursor: pointer;

    &:not(:first-child) {
      margin-top: 0.5rem;
    }

    &.active {
      font-weight: bold;
      transform: scale(1.2);
    }

    .iconfont {
      margin-right: 0.1rem;
    }

    .name {
      font-size: 0;
      transition: all 0.5s;
      user-select: none;
    }
  }
`;
export default () => {
  const navigate = useNavigate();

  const [tabList, setTabList] = useState([
    {
      id: 1,
      name: '用户',
      path: 'userList',
      icon: 'icon-user',
      active: true,
    },
    {
      id: 2,
      name: '统计',
      path: 'statistics',
      icon: 'icon-user',
      active: false,
    },
    {
      id: 3,
      name: '神器',
      path: 'artifact',
      icon: 'icon-user',
      active: false,
    },
  ] as ITab[]);

  /**
   * 切换分类
   * @param tabItem 每一标签选项
   */
  function pickTab(tabItem) {
    const newList = tabList.map((tab) => {
      tab.active = tab.id === tabItem.id;
      return tab;
    });
    setTabList(newList);
    navigate('/' + tabItem.path);
  }

  return (
    <TabBarWrap className="flex justify-center items-center flex-col">
      {tabList.map((tab) => (
        <div
          className={`tab_item ${tab.active && 'active'}`}
          key={tab.id}
          onClick={() => {
            pickTab(tab);
          }}
        >
          <i className={`iconfont ${tab.icon}`}></i>
          <div className="name">{tab.name}</div>
        </div>
      ))}
    </TabBarWrap>
  );
};
