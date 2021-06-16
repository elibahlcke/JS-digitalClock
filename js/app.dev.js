
const reloj = document.querySelector(".reloj");
const dia = document.querySelector(".fecha");
let arrayDias = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
let arrayMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

const getHora = () => {
    const fecha = new Date();
    const tiempo = {
        hora: fecha.getHours(),
        minuto: fecha.getMinutes(),
        segundo: fecha.getSeconds(),
        dia: fecha.getDay(),
        fecha: fecha.getDate(),
        mes: fecha.getMonth(),
        año: fecha.getFullYear(),
    };
    if(tiempo.minuto < 10){
        tiempo.minuto = "0" + tiempo.minuto;
    };
    tiempo.segundo < 10 ? tiempo.segundo = "0" + tiempo.segundo : tiempo.segundo;

    reloj.innerHTML =  `${tiempo.hora} : ${tiempo.minuto} : ${tiempo.segundo}`;
    dia.innerHTML = `Hoy es ${arrayDias[tiempo.dia]} ${tiempo.fecha} de ${arrayMeses[tiempo.mes]} de ${tiempo.año}.`;

};


setInterval(getHora, 1000);
