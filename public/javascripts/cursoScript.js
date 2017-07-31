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

var Curso = function() {
  var main = this;
  var cursoUri = "http://localhost:3000/api/curso";
  main.cursoes = ko.observableArray([]);

  main.getcursoes = function() {
    ajaxHelper(cursoUri, 'GET').done(function(data) {
      main.cursoes(data);
      });
  }
  main.getcursoes();
}


$(document).ready(function() {
  var curso = new Curso();
  ko.applyBindings(curso);
})
