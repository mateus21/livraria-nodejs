var mysql = require('mysql');

function createDBConnection() {
    return mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'mateusredem1',
        database:'livraria'
    });
}

module.exports = function () {
    return createDBConnection;
}