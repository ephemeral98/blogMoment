// 文章列表
import css from './index.less';
export default function ArticleList() {
  return (
    <div className={css.article_list_wrap}>
      <div className={css.article_title}>这是标题</div>
      <div className={css.article_content}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
        architecto ab pariatur nulla necessitatibus animi soluta natus nisi
        ratione temporibus?
      </div>
      <div className={css.footer}>点赞 投币</div>
    </div>
  );
}
