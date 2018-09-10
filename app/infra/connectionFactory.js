var mysql = require('mysql');

function createDBConnection() {
    if(!process.env.NODE_ENV) {
        return mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'mateusredem1',
            database:'livraria'
        });
    }

    if(process.env.NODE_ENV == 'test') {
        return mysql.createConnection({
            host:'localhost',
            user:'root',
            password:'mateusredem1',
            database:'livraria_test'
        });
    }
    
}

module.exports = function () {
    return createDBConnection;
}