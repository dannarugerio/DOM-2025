/* 

Objeto Event

El objeto evento (e) es la representación de un suceso que ocurre en el navegador, como un click, pulsar una tecla o el movimiento del mouse. Nos proporciona información sobre las propiedades y métodos para manipularlo.

Para acceder al objeto event (e) se pasa como argumento de la función manejadora (handler)

Sintaxis:

  function handler(e) {
  // Código que se ejecuta
  }

Algunas propiedades del objeto evento:

type 👉 devolver el tipo de evento
target 👉 devolver el elemento donde ocurre el evento 
timeStamp 👉 devuelve la marca de tiempo en milisegundos lacarga de la página

code 👉 devuelve el código de la tecla presionada
key 👉 devuelve el valor de la tecla presionada 

clientX 👉 devuelve la posición horizontal del puntero del mouse en relación a la ventana del navegador. 
clientY 👉 devuelve a la posición vertical del puntero del mouse en relación a la ventana del navegador.

*/

// Referencia 
const apachurra = document.getElementById("apachurra");

// Evento 
apachurra.addEventListener("click" , mostrarObjetoEvento ); 

// Función
function mostrarObjetoEvento(event) {
  // Codigo que se ejecuta 
  console.log(event)
  // Para acceder a las propiedades con .
  console.log(event.type);
  console.log(event.target);
  console.log(event.timeStamp);
  console.log(event.target.innerText);
}

// Evento de teclas 

document.addEventListener("keydown" , function(e) {
  // Código que se ejecuta cuando el usuario presione una tecla.
  // console.log(e);
  // console.log(e.type);
  // console.log(e.code);
  console.log(e.key);
})

// Evento de mouse

document.addEventListener("mousemove" , (e) => {
  //Código que se ejecuta
  // console.log(e);
  // console.log(e.type);
  // console.log(e.clientX)
  // console.log(e.clientY)
  console.log('Las oordenadas de mi mause con x: ${e.clientX} y de y: ${e.clientY} y pues espo!');
})