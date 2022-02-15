// 文章列表
import css from './index.less';
import { Checkbox } from 'antd';
import { history } from 'umi';

/**
 * 跳转到文章详情
 * @param id 文章id
 */
function toArticleDetail(id: number) {
  history.push({
    pathname: '/articleDetail',
    query: {
      id: id.toString(),
    },
  });
}

export default function Articles() {
  return (
    <div
      className={css.article_list_wrap}
      onClick={() => {
        toArticleDetail(1);
      }}
    >
      <Checkbox></Checkbox>

      <div className={css.main}>
        <div className={css.article_title}>这是标题</div>
        <div className={css.article_content}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
          architecto ab pariatur nulla necessitatibus animi soluta natus nisi
          ratione temporibus?
        </div>
        <div className={css.footer}>
          <div>
            <i className="iconfont icon-watch"></i>
            9999
          </div>
          <div>
            <i className="iconfont icon-comment"></i>
            1999
          </div>
          <div>
            <i className="iconfont icon-like"></i>
            2333
          </div>
          <div className={css.time}>
            <i className="iconfont icon-time"></i>
            2020.11.15
          </div>
        </div>
      </div>
    </div>
  );
}
