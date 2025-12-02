/* 

EVENTOS

Un evento es una acción o suceso que ocurre en el navegador o en un elemento del DOM. Puede ser iniciado por el usuario o por el sistema. Los eventos pueden ser manejados mediante JS.

  - Manejar Eventos con JS

    1. Target (Objetivo o Blanco)
      Es el elemento del DOM en el que ha ocurrido el evento. Este se encuentra dentro del objeto evento (event) y se accede mediante la propiedad event.target

    2. Event Listener (Escuchador del evento)
      Es el "oido" que está atento a que ocurra un evento en un elemento (target) en específico. Usamos el método addEventListener para escuchar los eventos. 

    3. Trigger (Disparador o Desencadenante)
      Es el desencadenante que provoca que un evento ocurra. Es la acción que realiza el usuario o el sistema para activar el evento

      - Dar click 
      - Mover el ratón 
      - Tipear teclas 

    4. Event Handler (Manejador de Evento)
      Es una función que se va a ejecutar cada vez que ocurre el evento. Con JS le decimos que va a ejecutar el manejador. 

      - Mostrar un mensaje
      - Cambiar un color
      - Agregar un elemento 
      - Lanzar una alerta

    SINTAXIS: 

      target.eventListener( trigger , eventHandler ); 

    target -> elemento donde ocurre el evento 
    listener -> escucha y detecta el evento 
    trigger -> acción que ocurre en el evento
    handler -> la función que se ejecuta al ocurrir el evento 

*/

// Seleccionamos un elemento

const button = document.getElementById("button");

// Manejar su evento

button.addEventListener("click" , mostrarMensaje );

// Definir la función 

function mostrarMensaje() {
  //Código que se ejecuta
  alert ("Ya vamonos, por favor!") 
}