const Controller = require('egg').Controller;
const { toInt, handleSucc, handleErr } = require('../utils/tools');

class ArticlesController extends Controller {
  async index() {
    const { limit, offset, tagId } = this.ctx?.query || {};
    const query = { limit: toInt(limit), offset: toInt(offset), tag_id: toInt(tagId) };
    try {
      let articles;
      if (tagId) {
        // 筛选出某个标签下的文章
        const where = {
          tagId,
        };
        articles = await this.ctx.model.Articles.findAndCountAll({ ...query, where });
      } else {
        articles = await this.ctx.model.Articles.findAndCountAll(query);
      }
      handleSucc(this.ctx, articles);
    } catch ({ message }) {
      handleErr(this.ctx, message);
    }
  }

  async show() {
    const { ctx } = this;
    try {
      const article = await ctx.model.Articles.findByPk(toInt(ctx.params.id));
      handleSucc(ctx, article);
    } catch ({ message }) {
      handleErr(ctx, message);
    }
  }

  async create() {
    const { ctx } = this;
    const { title, content, words, face, tagId } = ctx.request.body || {}; // 获取文章的标题和内容
    const body = {
      title,
      content,
      words,
      face,
      tagId,
    };
    try {
      const articles = await ctx.model.Articles.create(body);
      handleSucc(ctx, articles);
    } catch (err) {
      handleErr(ctx, err);
    }
  }

  async update() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const article = await ctx.model.Articles.findByPk(id);
    if (!article) {
      handleErr(ctx, '没有找到该文章');
      return;
    }
    const { title, content, words, face, tagId, top, like, watch } = ctx.request.body || {}; // 文章相关及周边信息
    let body = {
      title,
      content,
      words,
      face,
      tag_id: tagId,
      top,
      like,
      watch,
    };

    try {
      const res = await article.update(body);
      handleSucc(ctx, res);
    } catch ({ message }) {
      handleErr(ctx, message);
    }
  }

  async destroy() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const article = await ctx.model.Articles.findByPk(id);
    if (!article) {
      handleErr(ctx, '没有找到该文章');
      return;
    }
    await article.destroy();
    handleSucc(ctx, '删除成功');
  }
}

module.exports = ArticlesController;
