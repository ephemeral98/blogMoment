// 评论 api 操作
const Controller = require('egg').Controller;
const { toInt, foundErr, foundSucc, handleSucc, handleErr } = require('../utils/tools');

class CommentController extends Controller {
  async index() {
    const { ctx } = this;
    console.log('commont....', ctx.model.Comment);
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.Comment.findAndCountAll(query);
  }

  async show() {
    const { ctx } = this;
    ctx.body = await ctx.model.article.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const { ctx } = this;
    const { content, parent, toWho, userId } = ctx.request.body;
    const body = {
      content,
      parent,
      toWho,
      userId,
    };
    try {
      const comment = await ctx.model.Comment.create(body);
      handleSucc(ctx, comment);
    } catch ({ message }) {
      handleErr(ctx, message);
    }
  }

  async update() {}

  async destroy() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const comment = await ctx.model.Comment.findByPk(id);
    if (!comment) {
      handleErr(ctx, '找不到该评论');
      return;
    }
    try {
      await comment.destroy();
      handleSucc(ctx, '删除成功');
    } catch ({ message }) {
      handleErr(ctx, message);
    }
  }
}

module.exports = CommentController;
