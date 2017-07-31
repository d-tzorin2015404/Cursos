function ajaxHelper(uri, method, data) {
  return $.ajax({
    url: uri,
    type: method,
    dataType: 'json',
    contentType: 'application/json',
    data: data ? JSON.stringify(data) : null
  }).fail(function(jqXHR, textStatus, errorThrown){
    console.log(errorThrown);
  });
}

var Grupo = function() {
  var main = this;
  var grupoUri = "http://localhost:3000/api/grupo";
  var seccionUri = "http://localhost:3000/api/seccion";
  main.grupos = ko.observableArray([]);
  main.secciones = ko.observableArray([]);
  main.grupoNuevo = {
        nombreGrupo: ko.observable([]),
        seccion: ko.observable([])
    }


       main.agregar = function (formElement) {
        var s = {
            nombreGrupo: main.grupoNuevo.nombreGrupo(),
            idSeccion: main.grupoNuevo.seccion().idSeccion
        }
        console.log(s);
        ajaxHelper(seccionUri, 'POST', s)
            .done(function (data) {
                getsecciones();
                $('#modalGrupo').modal('hide');
            });
    }

  main.getsecciones = function() {
    ajaxHelper(seccionUri, 'GET').done(function(data) {
      main.secciones(data);
      });
  }

  main.getGrupos = function() {
    ajaxHelper(grupoUri, 'GET').done(function(data) {
      main.grupos(data);
      });
  }
  main.getsecciones();
  main.getGrupos();
}


$(document).ready(function() {
  var grupo = new Grupo();
  ko.applyBindings(grupo);
})
