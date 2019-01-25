'use strict';

/**
 * 判断是否登录
 * @param {object} options - 中间件的配置项
 * @param {Egg.Application} app - 当前应用的实例
 * @author wangyong
 * @return {null} null
 */
module.exports = (options, app) => {
    return async function auth(ctx, next) {
        await next();
        // 过滤登录接口
        const ignorePaths = ['/login'];
        
        if (ignorePaths.includes(ctx.path)) {
            return;
        }
        await ctx.verifyToken();
    }
}