'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async index() {
    this.ctx.body = "wangyong";
  }
  async login() {
    const { name, password } = this.ctx.request.body

    const result = await this.ctx.service.user.login(name, password)
    if (!result) {
      this.ctx.body = { code: this.ctx.NO_LOGIN_CODE, message: "账号或密码错误" }
    } else {
      const token = this.ctx.createToken({ name: result.name, id: result.id })
      this.ctx.body = {
        code: this.ctx.SUCCESS_CODE, result, token
      };
    }

  }
  async getUserInfo() {
    const id = this.ctx.getUserId();
    const user = await this.ctx.model.User.findOne({
      where: {
        id
      }
    })
    this.ctx.body = {
      code: this.ctx.SUCCESS_CODE,
      message: "用户信息获取成功",
      data: {
        role: 'admin',
        user
      }
    }

  }
}


module.exports = UserController;
