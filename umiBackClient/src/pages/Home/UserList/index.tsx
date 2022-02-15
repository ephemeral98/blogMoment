// 用户列表
import { useState } from 'react';
import css from '../index.less';
import { Checkbox } from 'antd';
import { connect } from 'dva';
import { IUserListType } from '@/models/TableListType';
import { history } from 'umi';

function UserList({ tableList, dispatch }: any) {
  console.log('dadad', tableList.userList);

  // 表格头
  const [headList, setHeadList] = useState([
    {
      name: '',
    },
    {
      name: 'id',
    },
    {
      name: '用户名',
    },
    {
      name: '操作1',
    },
    {
      name: '操作2',
    },
    {
      name: '操作3',
    },
  ]);

  /**
   * 选中项
   * @param id 用户id
   * @param e 多选框状态
   */
  function pick(id: number, e: any) {
    const newList = tableList.userList.map((item: IUserListType) => {
      if (item.id === id) {
        item.checked = e.target.checked;
      }
      return item;
    });
    dispatch({
      type: 'tableList/pickUser',
      payload: newList,
    });
    console.log(tableList.userList);
  }

  /**
   * 删除
   * @param {Number} id 用户id
   */
  function handleDel(id: number): any {
    console.log('id...', id);
  }

  /**
   * 发消息
   * @param {Number} id 用户id
   */
  function sendMsg(id: number): any {
    console.log('发消息。。', id);
  }

  /**
   * 查看详情
   */
  function toDetail(id: string | number) {
    history.push({
      pathname: '/userDetail',
      query: {
        id: id.toString(),
      },
    });
  }

  // 表格头
  const headListComp = headList.map((item, inx) => {
    return <th key={inx}>{item.name}</th>;
  });

  // 表格体
  const bodyListComp = tableList.userList.map((item: IUserListType) => {
    return (
      <tr key={item.id}>
        <td>
          <Checkbox
            onChange={(e) => {
              pick(item.id, e);
            }}
          />
        </td>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>
          <button
            className={css.del_btn}
            onClick={() => {
              handleDel(item.id);
            }}
          >
            删除
          </button>
        </td>
        <td>
          <button
            className={css.msg_btn}
            onClick={() => {
              sendMsg(item.id);
            }}
          >
            发消息
          </button>
        </td>
        <td>
          <button
            className={css.detail_btn}
            onClick={() => {
              toDetail(item.id);
            }}
          >
            查看详情
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>{<tr>{headListComp}</tr>}</thead>
        <tbody>{bodyListComp}</tbody>
      </table>
    </>
  );
}

const mapToStateProps = (state: any) => {
  return {
    tableList: state.tableList,
  };
};

// export default connect(mapToStateProps)(UserList);
export default connect(mapToStateProps)(UserList);
