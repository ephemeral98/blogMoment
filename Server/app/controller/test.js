// 评论 api 操作
const Controller = require('egg').Controller;
const { toInt, foundErr, foundSucc, handleSucc, handleErr } = require('../utils/tools');

class CommentController extends Controller {
  async index() {
    const { ctx } = this;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    const resp = await ctx.model.Test.findAndCountAll(query);
    const respBody = resp.rows?.map?.((item) => {
      return {
        id: item.id,
        account: item.account,
        name: item.name,
      };
    });

    ctx.body = {
      count: resp.count,
      datas: respBody,
    };
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
      const comment = await ctx.model.Users.create(body);
      handleSucc(ctx, comment);
    } catch ({ message }) {
      handleErr(ctx, message);
    }
  }

  async update() {}

  async destroy() {}
}

module.exports = CommentController;
