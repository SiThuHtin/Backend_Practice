var Pool = require('pg-pool')
var pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database: 'Auth',
    password: 'Sithuhtin160997@',
    port: 5432
});

module.exports = pool;