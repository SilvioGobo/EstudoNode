const moment = require('moment');

moment.locale('pt-br');

function data(dt) {
    return moment(dt).format('DD/MM/YYYY');
}

function hora(dt) {
    return moment(dt).format('HH:mm');
}

function dataExtenso(dt) {
    return moment(dt).format('dddd, DD [de] MMMM [de] YYYY');
}

module.exports = {
    data,
    hora,
    dataExtenso
}