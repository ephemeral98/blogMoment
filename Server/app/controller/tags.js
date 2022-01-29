// 标签 api 操作

const Controller = require('egg').Controller;
const { toInt, handleSucc, handleErr } = require('../utils/tools');

class TagsController extends Controller {
  async index() {
    const { ctx } = this;
    try {
      let tags;
      const { articleId } = ctx.query;
      if (articleId) {
        // 查询某文章下的所有标签
        const where = {
          articleId,
        };
        tags = await ctx.model.Tags.findAndCountAll({ where });
      } else {
        tags = await ctx.model.Tags.findAndCountAll();
      }

      handleSucc(ctx, tags);
    } catch (err) {
      handleErr(ctx, err);
    }
  }

  async show() {
    const { params } = this.ctx || {};
    if (!params.id) {
      handleErr(this.ctx, '找不到该标签');
    }
    try {
      const data = await this.ctx.model.Tags.findByPk(toInt(params.id));
      handleSucc(this.ctx, data);
    } catch (err) {
      handleErr(this.ctx, err);
    }
  }

  async create() {
    const { ctx } = this;
    const { name, articleId } = ctx.request.body; // 获取tag名字，和关联该标签的文章id
    if (!name) {
      handleErr(ctx, '标签名字不能为空');
      return;
    }
    try {
      const tags = await ctx.model.Tags.create({ name, articleId });
      handleSucc(ctx, tags);
    } catch (err) {
      handleErr(ctx, err);
    }
  }

  async update() {
    const ctx = this.ctx;
    const id = toInt(ctx.params.id);
    const Tags = await ctx.model.Tags.findByPk(id);
    if (!Tags) {
      handleErr(ctx, '找不到该标签');
      return;
    }

    const { name } = ctx.request.body;
    if (!name) {
      handleErr(ctx, '标签名字不能为空');
      return;
    }
    try {
      await Tags.update({ name });
      handleSucc(ctx, '修改成功');
    } catch (err) {
      handleErr(ctx, err);
    }
  }

  async destroy() {
    const { ctx } = this;
    const id = toInt(ctx.params.id);
    const Tags = await ctx.model.Tags.findByPk(id);
    if (!Tags) {
      handleErr(ctx, '找不到该标签');
      return;
    }
    try {
      await Tags.destroy();
      handleSucc(ctx, '删除成功');
    } catch (err) {
      handleErr(ctx, err);
    }
  }
}

module.exports = TagsController;
