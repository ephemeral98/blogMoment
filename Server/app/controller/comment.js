// 评论 api 操作
const Controller = require('egg').Controller;
const { toInt, foundErr, foundSucc } = require('../utils/tools');

class CommentController extends Controller {
  async index() {
    const { ctx } = this;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.comment.findAll(query);
  }

  async show() {
    const { ctx } = this;
    ctx.body = await ctx.model.article.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const { ctx } = this;
    const { content, parent, toWho, userId } = ctx.body;
    const body = {
      content,
      parent,
      toWho,
      userId,
    };
    const comment = await ctx.model.comment.create(body);
    ctx.status = 200;
    ctx.body = comment;
  }

  async update() {}

  async destroy() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const comment = ctx.model.comment.findByPk(id);
    foundErr(comment, ctx, '找不到该文章');
    await comment.destroy();
    foundSucc('删除成功');
  }
}

module.exports = CommentController;
