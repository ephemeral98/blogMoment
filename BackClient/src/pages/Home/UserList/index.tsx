// 用户列表
import { useState } from 'react';
import css from '../index.less';

export default () => {
  // 表格头
  const [headList, setHeadList] = useState([
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
  ]);

  // 表格体
  const [bodyList, setBodyList] = useState([
    {
      id: 1,
      name: '张三',
    },
    {
      id: 2,
      name: '李四',
    },
  ]);

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

  // 表格头
  const headListComp = headList.map((item, inx) => {
    return <th key={inx}>{item.name}</th>;
  });

  // 表格体
  const bodyListComp = bodyList.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td className={css.user_name}>{item.name}</td>
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
};
