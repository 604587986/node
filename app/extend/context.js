'use strict';

module.exports = {
    SUCCESS_CODE: 200,
    NO_LOGIN_CODE: 401,
    NO_AUTHORITY_CODE: 403,

    // 获取token
    getAccessToken() {
        let token = this.get('authorization');
        return token && token.replace("token ", "")
    },
    // 设置token
    createToken(data) {
        const { app } = this;

        if (decodeURI(data.name) === data.name) {
            data.name = encodeURI(data.name);
        }

        const token = app.jwt.sign(data, app.config.jwt.secret, { expiresIn: '2h' });
        return token;
    },
    // 校验 Token
    async verifyToken() {
        const { app } = this;
        const token = this.getAccessToken()
        if (!token) {
            this.verifyFail(401, '未登录')
            return false;
        }
        const verifyResult = await new Promise(resolve => {
            app.jwt.verify(token, app.config.jwt.secret, (err, decoded) => {
                if (err) {
                    resolve({ verify: false, type: err.name, message: err.message });
                } else {
                    resolve({ verify: true, message: decoded });
                }
            });
        });
        if (!verifyResult.verify) {
            this.verifyFail(401, verifyResult.message);
            return false;
        }

        return true;

    },
    //从token中获取用户信息
    getUserId() {
        const { app } = this;

        const token = this.getAccessToken();

        const info = app.jwt.verify(token, app.config.jwt.secret)

        return info.id

    },
    // 校验token失败
    verifyFail(code, message) {
        this.body = { code, message };
        this.status = code;
    },
}