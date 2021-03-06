// 每日一句 api 操作
const Controller = require('egg').Controller;
const { toInt, foundErr, foundSucc, handleSucc, handleErr } = require('../utils/tools');

class DailyWordsController extends Controller {
  async index() {
    const { ctx } = this;
    const query = { limit: toInt(ctx.query.limit), offset: toInt(ctx.query.offset) };
    ctx.body = await ctx.model.dailyWords.findAll(query);
  }

  async show() {
    const { ctx } = this;
    ctx.body = await ctx.model.dailyWords.findByPk(toInt(ctx.params.id));
  }

  async create() {
    const { ctx } = this;
    const { content, userId } = ctx.body;
    const body = {
      content,
      userId,
    };
    try {
      const dailyWords = await ctx.model.DailyWords.create(body);
      handleSucc(ctx, dailyWords);
    } catch ({message}) {
      handleErr(ctx, message);
    }
  }

  async update() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const dailyWords = ctx.model.dailyWords.findByPk(id);
    foundErr(dailyWords, ctx, '找不到该句子');

    const { content } = ctx.request.body;
    await dailyWords.update({ content });
    ctx.body = dailyWords;
  }

  async destroy() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const dailyWords = await ctx.model.dailyWords.findByPk(id);
    foundErr(dailyWords, ctx, '找不到该句子');
    await dailyWords.destroy();
    foundSucc();
  }
}

module.exports = DailyWordsController;
