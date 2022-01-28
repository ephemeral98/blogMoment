const Controller = require('egg').Controller;
const { toInt, foundErr, foundSucc } = require('../utils/tools');

class ArticlesController extends Controller {
  async index() {
    const { limit, offset } = this?.ctx?.query || {};
    const query = { limit: toInt(limit), offset: toInt(offset) };
    this.ctx.body = await this.ctx.model.Tags.findAll(query);
  }

  async show() {
    const { ctx } = this;
    ctx.body = await ctx.model.Tags.findByPk(toInt(ctx.params.id));
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
    const article = await ctx.model.Tags.create(body);
    foundSucc('新建成功!');
    ctx.body = article;
  }

  async update() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const article = await ctx.model.Tags.findByPk(id);
    foundErr(article, ctx, '没有找到该文章');
    const { title, content, words, face, tagId, top, like, watch } = ctx.request.body || {}; // 文章相关及周边信息
    const body = {
      title,
      content,
      words,
      face,
      tagId,
      top,
      like,
      watch,
    };
    await tags.update(body);
    ctx.body = article;
  }

  async destroy() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const article = await ctx.model.tags.findByPk(id);
    foundErr(article, ctx, '没有找到该文章');
    await article.destroy();
    foundSucc('删除成功');
  }
}

module.exports = ArticlesController;
