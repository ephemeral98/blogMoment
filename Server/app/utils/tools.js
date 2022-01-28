/**
 * 强制转为int数据类型
 * @param {*} str
 * @returns
 */
function toInt(str) {
  if (typeof str === 'number') return str;
  if (!str) return str;
  return parseInt(str, 10) || 0;
}

/**
 * 找不到该模型对象的处理方法
 * @param {Object} model 模型对象
 * @param {Object} ctx 上下文
 * @param {String} msg 信息
 */
function foundErr(model, ctx, msg = '找不到该对象') {
  if (!model) {
    ctx.status = 404;
    ctx.message = msg;
    throw new Error(msg);
  }
}

/**
 * 操作成功的处理方法
 * @param {Object} model 模型对象
 * @param {Object} ctx 上下文
 * @param {String} msg 信息
 */
function foundSucc(model, ctx, msg = '找不到该对象') {
  ctx.status = 200;
  ctx.message = msg;
}

module.exports = {
  toInt,
  foundErr,
  foundSucc,
};
