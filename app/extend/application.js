const fecha = require('fecha');

module.exports = {
    // 日期格式化
    formatToDay(date) {
        return fecha.format(date, 'YYYY-MM-DD');
    },
    formatToDayTime(date) {
        return fecha.format(date, 'YYYY-MM-DD HH:mm:ss');
    },
}