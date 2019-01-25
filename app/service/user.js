'use strict';

const Service = require('egg').Service;

class UserService extends Service {
    async login(userName, password) {
        return await this.ctx.model.User.findOne({
            where: {
                name: userName,
                password
            }
        })
    }
}module.exports = UserService;