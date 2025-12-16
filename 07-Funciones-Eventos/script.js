/* 

Funciones y Eventos

La función es un evento es el Handler. Es lo que se ejecuta cuando ocurre el evento.

1. Evento con función declarada
  Esta función se escribe por fuera del evento y se pasa como argumento de Listener.

Sintaxis:

  target.eventListener( trigger , eventHandler );

  funcion eventHandler() {
  // Codigo que se ejecuta
  }

*/

// Referencias 
const declarada = document.getElementById("declarada");

// Evento con función declarada
declarada.addEventListener("click", funcionDeclarada );

function funcionDeclarada() {
  console.log("Hiciste click en el botón con función declarada!")
}

/* 

2. Evento con Función Anonima

La función se escribe dentro del evento y no tiene un nombre asignado.

Sintaxis:

  target.addEventListener( trigger, function(){ // código a ejecutar})

*/

//Referencia
const anonima = document.getElementById("anonima");

// Evento con función anonima 
anonima.addEventListener("click", function() {
  console.log("Hiciste click en el botón con función anónima 👾")
});

/* 

3. Evento con Función Flecha

Esta función se escribe tambien dentro del evento, no tiene y es más concisa.

Sintaxis:

  target.addEventListener( tigger, () => { // Código que se ejecuta })


* Si el código que se ejecuta tiene más de 1 línea, se debe escribir entre las llaves.
* Si el código que se ejecuta solo tiene 1 línea, se pueden omitir las llaves.

*/
// Referencia

const flecha = document.getElementById("flecha");

// Evento con función flecha
flecha.addEventListener("click", () => {
  console.log("Hiciste click en el botón función flecha!")
});