var juegoNuevo = confirm("¿Empezar nuevo juego de cara o cruz?")
while (juegoNuevo == true){
function introducirEleccion (){
    var usuario = prompt("Elige escribiendo aquí cara o cruz");

if (usuario !== "Cruz" && usuario !== "cruz" && usuario !== "CRUZ" &&usuario !==  "CARA" && usuario !== "cara" && usuario !== "Cara")
{
    alert("!Solo puedes escribir cara o cruz para tu elección!");
     introducirEleccion();
    }
}
var usuario = introducirEleccion();

if (usuario == "Cruz"|| usuario == "cruz" || usuario == "CRUZ" ){
  var  usuario ="Cruz"
} else{
   var usuario = "Cara"
}

var aleatorio = Math.round(Math.random()*1);
console.log("Jugador a elegido "+usuario);
alert("Jugador a elegido "+usuario)

var opciones = ["Cruz","Cara"];

  var monedaAlAire = opciones[Math.floor(Math.random()*opciones.length)];


if (monedaAlAire == usuario){

    alert("GANAS! Elegiste "+usuario +" y la en la moneda salió " +monedaAlAire)
}else{
    alert("Perdiste! Elegiste "+usuario +" y la en la moneda salió " +monedaAlAire)
}var juegoNuevo = confirm("¿Empezar nuevo juego de cara o cruz?")}
