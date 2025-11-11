/* 

Nodo de documento

Este nodo representa el domumento completo de HTML. Incluye el contenido raíz > root hasta los elementos hijos. 
para acceder a este nodo usamos document

*/
console.log (document);
console.log (document.head);
console.log(document.body);
console.log(document.title);
console.log(document.URL);

/* 

Nodo elemento

Podemos seleccionar nodos de los elementos del HTML
document.getElementsByTagName("element");

*/

let title = document.getElementsByTagName("h1");

console.log(title)
console.log(title[0].id)
console.log(title[0].className)

/* 

Nodos de atributo

Son los nodos que accedemos a través de su clase o su ID

document.getElementById("id")
document.getElementsByClassName(clase) //va a traer todas las coincidencias 

document.querySelector(nombreSelector);👉 selecciona la primera conincidencia
document.querySelectorAll(nombreSelector);👉 selecciona todas las conincidencias


para querySelector y querySelectorAll hay que expecificar el tipo de selector.

  "nombre etiqueta" 👉 Si no lleva caracteres especiales selecciona etiquetas
  ".nombreClase" 👉 Con un punto selecciona clases 
  "#nombreId" 👉 con un numeral selecciona el ID
*/

//acceder a ID
  let parrafo = document.getElementById("introduccion")
  console.log(parrafo)
  console.log(parrafo.innerText)

//acceder a CLases

  let bullet = document.getElementsByClassName("bullet")
  console.log(bullet)

  for(i = 0; i<bullet.length; i++) {
    console.log(bullet[i].innerText)
  }

// "Selector" para ID
  let main = document.querySelector("#main")
  console.log(main)


  // "SelectorAll" para clases
  let section = document.querySelectorAll(".section")
  console.log(section)


  /* 
  
  Nodo de texto

  Las Propiedades que permiten acceder a el contenido de los elementos de HTML.

  nodo.innerText
  nodo.textContent
  
  */

  let subtitulo = document.getElementById("subtitulo")
  console.log(subtitulo.innerText);
  console.log(subtitulo.textContent);
  console.log(subtitulo.innerHTML); 