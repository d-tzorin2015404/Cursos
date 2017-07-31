var mysql = require("mysql");
var parametros = {
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'cursos'
};
var connection = mysql.createConnection(parametros);

module.exports = connection;
