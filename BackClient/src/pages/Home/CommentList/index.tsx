// 评论列表
import { useState } from 'react';
import css from '../index.less';
import dayjs from 'dayjs';

export default function CommentList() {
  /**
   * 删除
   */
  function handleDel(id: number) {
    console.log('用户id？', id);
  }

  // 表格头
  const [headList, setHeadList] = useState([
    {
      name: 'id',
    },
    {
      name: '用户名',
    },
    {
      name: '评论内容',
    },
    {
      name: '评论时间',
    },
    {
      name: '地区',
    },
    {
      name: '操作',
    },
  ]);

  const headListComp = headList.map((item, inx) => {
    return <th key={inx}>{item.name}</th>;
  });

  // 表格体
  const [bodyList, setBodyList] = useState([
    {
      id: 1,
      name: '张三',
      content: 'this is comment...',
      time: 1644066413309,
      area: '广东省深圳市南山区',
    },
    {
      id: 2,
      name: '李四',
      content: 'this is comment22222',
      time: 1644096453513,
      area: '广东省广州市天河区',
    },
  ]);

  const bodyListComp = bodyList.map((item) => {
    return (
      <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.content}</td>
        <td>{dayjs(item.time).format('YYYY-MM-DD HH:mm:ss')}</td>
        <td>{item.area}</td>
        <td>
          <button
            onClick={() => {
              handleDel(item.id);
            }}
            className={css.del_btn}
          >
            删除
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <table>
        <thead>
          <tr>{headListComp}</tr>
        </thead>
        <tbody>{bodyListComp}</tbody>
      </table>
    </>
  );
}
