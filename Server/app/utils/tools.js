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
    ctx.code = 1000;
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
function foundSucc(ctx) {
  ctx.status = 200;
  ctx.code = 1;
}

/**
 * 请求成功返回的响应体
 * @param {Object} ctx 上下文
 * @param {String} res 响应体
 */
function handleSucc(ctx, res) {
  let data;
  if (typeof res === 'string') {
    data = res;
  } else if (typeof res === 'object') {
    if (Array.isArray(res)) {
      data = [...res];
    } else {
      data = res;
    }
  }
  ctx.body = {
    code: 1,
    data,
  };
}

/**
 * 请求成功返回的响应体
 * @param {Object} ctx 上下文
 * @param {String} message 错误消息
 */
function handleErr(ctx, message) {
  ctx.body = {
    code: 1000,
    message,
  };
}

module.exports = {
  toInt,
  foundErr,
  foundSucc,
  handleSucc,
  handleErr,
};
