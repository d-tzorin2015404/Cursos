var database = require('./database')
var seccion = {};


seccion.selectAll = function(callback) {
  if(database) {
    database.query("SELECT * FROM Seccion",
    function(error, resultados) {
      if(error) {
        throw error;
      } else {
        callback(null, resultados);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

seccion.select = function(idSeccion, callback) {
  if(database) {
    var sql = "SELECT * FROM Seccion WHERE idSeccion = ?";
    database.query(sql, idseccion,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, resultado);
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

seccion.insert = function(data, callback) {
  if(database) {
    database.query("INSERT INTO Seccion SET ? ", data,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

seccion.update = function(data, callback) {
  if(database) {
    var sql = "UPDATE Seccion SET "
    +"nombre = ? WHERE idSeccion = ?";
    database.query(sql,
    [data.nombre, data.idSeccion],
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"insertId": resultado.insertId});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll

seccion.delete = function(idseccion, callback) {
  if(database) {
    var sql = "DELETE FROM Seccion WHERE idSeccion = ?";
    database.query(sql, idseccion,
    function(error, resultado) {
      if(error) {
        throw error;
      } else {
        callback(null, {"Mensaje": "Eliminado"});
      }
    });//Fin query
  }//Fin IF
}//FIN SelectAll


module.exports = seccion;
