var pl = require("tau-prolog");
var session = pl.create(1000);
var consultaController = {};
var reglas = require("../data/Contexto.js");
var datos = require("../data/datos.js");
var program = reglas;
session.consult(program);
consultaController.index = function (req, res) {
  res.render("../views/index");
};
var cadena = "";
var contador = 0;
var arregloenvio = [];
// Obtener argumento de Node.js: nodejs ./script.js item
function hola(temp) {
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
    //console.log(arregloenvio)
  } catch (e) {}
}

function hola2(temp) {
  if(contador==0){
  console.log(temp.toString());
    let cadena_animal = temp.toString();
    //cadena_animal = cadena_animal.replace(new RegExp("false.", "g"), "");
    cadena_animal = cadena_animal.split(";")
    cadena_animal = cadena_animal[0];
    arregloenvio = cadena_animal;
    contador=1;
  }
}

function procesar(consulta_cadena, nombre) {
  // Cargar programa
  var ejemplo = // Productos
    "item(id(1), name(bread))." +
    "item(id(2), name(water))." +
    "item(id(3), name(apple))." +
    // Tiendas
    "shop(id(1), name(tau), location(spain))." +
    "shop(id(2), name(swi), location(netherlands))." +
    // Inventario
    "stock(item(1), shop(1), count(23), price(0.33))." +
    "stock(item(2), shop(1), count(17), price(0.25))." +
    "stock(item(2), shop(2), count(34), price(0.31))." +
    "stock(item(3), shop(2), count(15), price(0.45)).";

  /*let item = "water";
  session.query(
    "item(id(ItemID), name(" +
      item +
      ")), stock(item(ItemID), shop(ShopID), _, price(Price)), shop(id(ShopID), name(Shop), _)."
  );

  session.answers((x) => hola("pregunta:" + pl.format_answer(x)));
  session.query("item(id(2),name(" + item + ")).");
  
  session.answers((x) => hola("resp: " + pl.format_answer(x)));
  */
  if (nombre != "nada") {
    datos.forEach(function (animal) {
      if (animal.nombre == nombre) {
        session.query(
          "animal(nombre(" +
            animal.nombre +
            "),id(" +
            animal.id +
            "))" +
            consulta_cadena +
            "."
        );
        session.answers((x) => hola2("" + pl.format_answer(x)));
      }
    });
  } else {
    session.query("animal(nombre(N),id(I))" + consulta_cadena + ".");
    session.answers((x) => hola("" + pl.format_answer(x)));
  }
}

consultaController.list = function (req, res) {
  procesar(req.body.cadena, req.body.nombrebuscado);
  res.send({ resultado: arregloenvio });
  arregloenvio = [];
  cadena = "";
  contador=0;
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
