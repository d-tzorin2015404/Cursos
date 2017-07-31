var database = require('./database')
var curso = {};

curso.selectAll = function(callback) {
  if(database) {
    database.query("SELECT * FROM curso",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

curso.select = function(idcurso, callback) {
  if(database) {
    var sql = "SELECT * FROM curso WHERE idcurso = ?";
    database.query(sql, idcurso,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

curso.insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO curso SET ? ", data,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

curso.update = function(data, callback) {
  if(database) {
    var sql = "UPDATE curso SET "
    +"nombre = ? WHERE idcurso = ?";
    database.query(sql,
    [data.nombre, data.idcurso],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

curso.delete = function(idcurso, callback) {
  if(database) {
    var sql = "DELETE FROM curso WHERE idcurso = ?";
    database.query(sql, idcurso,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll


module.exports = curso;
