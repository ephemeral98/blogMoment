// 用户列表
import { useState } from 'react';
import css from '../index.less';
import { Checkbox } from 'antd';
import { connect } from 'dva';
import { IArticleListType } from '@/models/TableListType';
import { history } from 'umi';
import tableList from '@/models/tableList';

function ArticleList({ tableList, dispatch }: any) {
  // 表格头
  const [headList, setHeadList] = useState([
    {
      name: '',
    },
    {
      name: 'id',
    },
    {
      name: '文章标题',
    },
    {
      name: '文章内容',
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

  /**
   * 删除
   * @param {Number} id 用户id
   */
  function handleDel(id: number): any {
    console.log('id...', id);
  }

  /**
   * 查看详情
   */
  function toDetail(id: string | number) {
    history.push({
      pathname: '/articleDetail',
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
  const bodyListComp = tableList.articleList.map((item: IArticleListType) => {
    return (
      <tr key={item.id}>
        <td>
          <Checkbox onChange={(e) => {}} />
        </td>
        <td>{item.id}</td>
        <td>{item.title}</td>
        <td>{item.content}</td>
        <td>{item.name}</td>
        <td>
          <button
            className={css.detail_btn}
            onClick={() => {
              toDetail(item.id);
            }}
          >
            删除
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
export default connect(mapToStateProps)(ArticleList);
