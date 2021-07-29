"use strict";

var _this = void 0;

function _newArrowCheck(innerThis, boundThis) { if (innerThis !== boundThis) { throw new TypeError("Cannot instantiate an arrow function"); } }

var reloj = document.querySelector(".reloj");
var dia = document.querySelector(".fecha");
var arrayDias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
var arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var getHora = function getHora() {
  _newArrowCheck(this, _this);

  var fecha = new Date();
  var tiempo = {
    hora: fecha.getHours(),
    minuto: fecha.getMinutes(),
    segundo: fecha.getSeconds(),
    dia: fecha.getDay(),
    fecha: fecha.getDate(),
    mes: fecha.getMonth(),
    año: fecha.getFullYear()
  };

  if (tiempo.minuto < 10) {
    tiempo.minuto = "0" + tiempo.minuto;
  }

  ;
  tiempo.segundo < 10 ? tiempo.segundo = "0" + tiempo.segundo : tiempo.segundo;
  reloj.innerHTML = "".concat(tiempo.hora, " : ").concat(tiempo.minuto, " : ").concat(tiempo.segundo);
  dia.innerHTML = "Hoy es ".concat(arrayDias[tiempo.dia], " ").concat(tiempo.fecha, " de ").concat(arrayMeses[tiempo.mes], " de ").concat(tiempo.año, ".");
}.bind(void 0);

setInterval(getHora, 1000);
