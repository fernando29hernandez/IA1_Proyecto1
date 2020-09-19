var pl = require("tau-prolog");
var session = pl.create(1000);
var consultaController = {};
var reglas = require("../data/Contexto.js");
var datos = require("../data/datos.js");
var program = reglas;
var fs = require("fs");
fs.readFile("./data/contexto.pl", "utf8", function (err, data) {
  session.consult(data);
});

var cadena = "";
var contador = 0;
var arregloenvio = [];

function busquedaGenerica(temp) {
  try {
    console.log("|" + temp.toString());
    let cadena_animal = temp.toString();
    cadena_animal = cadena_animal.replace(new RegExp(", {false.}", "g"), "");
    cadena_animal = cadena_animal.replace(new RegExp(";", "g"), "");
    cadena_animal = cadena_animal.split(",");
    cadena_animal = cadena_animal[1];
    cadena_animal = cadena_animal.split("=");
    cadena_animal = parseInt(cadena_animal[1]);
    datos.forEach(function (animal) {
      if (animal.id == cadena_animal) {
        arregloenvio.unshift(animal);
      }
    });
  } catch (e) {}
}

function busquedaEspecifica(temp) {
  if (contador == 0) {
    console.log(temp.toString());
    let cadena_animal = temp.toString();
    cadena_animal = cadena_animal.split(";");
    cadena_animal = cadena_animal[0];
    arregloenvio = cadena_animal;
    contador = 1;
  }
}

function procesar(consulta_cadena, nombre) {
  if (nombre != "nada") {
    datos.forEach(function (animal) {
      if (animal.nombre == nombre) {
        session.query(
          "animal(" +
            animal.nombre +
            "," +
            animal.id +
            ",_,_,_,_)" +
            consulta_cadena +
            "."
        );
        session.answers((x) => busquedaEspecifica("" + pl.format_answer(x)));
      }
    });
  } else {
    session.query("animal(N,I,_,_,_,_)" + consulta_cadena + ".");
    session.answers((x) => busquedaGenerica("" + pl.format_answer(x)));
  }
}

consultaController.index = function (req, res) {
  res.render("../views/index");
};

consultaController.list = function (req, res) {
  procesar(req.body.cadena, req.body.nombrebuscado);
  res.send({ resultado: arregloenvio });
  arregloenvio = [];
  cadena = "";
  contador = 0;
};

consultaController.view = function (req, res) {
  let indice = req.params.id;
  datos.forEach(function (animal) {
    if (animal.id == indice) {
      res.render("../views/vista", { resultado: animal });
    }
  });
};

module.exports = consultaController;
