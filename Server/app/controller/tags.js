// 标签 api 操作

const Controller = require('egg').Controller;
const { toInt } = require('../utils/tools');

class TagsController extends Controller {
  async index() {
    const ctx = this.ctx;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.tags.findAll(query);
  }

  async show() {
    const ctx = this.ctx;
    ctx.body = await ctx.model.tags.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const ctx = this.ctx;
    const { name, articleId } = ctx.request.body;  // 获取tag名字，和关联该标签的文章id
    const user = await ctx.model.tags.create({ name, articleId });
    ctx.status = 200;
    ctx.body = user;
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const tags = await ctx.model.tags.findByPk(id);
    if (!tags) {
      ctx.status = 404;
      return;
    }

    const { name, articleId } = ctx.request.body;
    await tags.update({ name, articleId });
    ctx.body = tags;
  }

  async destroy() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const tags = await ctx.model.tags.findByPk(id);
    if (!tags) {
      ctx.status = 404;
      return;
    }

    await tags.destroy();
    ctx.status = 200;
  }
}

module.exports = TagsController;
