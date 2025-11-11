/* 

Selecionar el h1 a través de su clase

/* 

const titulo = document.querySelector(".titulo");

/* 

Modo seleccionador

/* 

console.log(titulo);

/* 

Objeto style

Acceder a este objeto usando la  notación de punto
  nodo.style
Resultado es CSS Style Declaration. Es decir una lista que representa todas las propiedades de estilo del elemento.

Las Propedades cambian del formato kebab-case a camelCase

Unicamente muestra el valor de los estilos en linea declarados directamente en el elemento HTML
*/ 

/* 

console.log(titulo.style)

*/ 

/*
Para acceder a las propiedaddes de estilo usamos la notación de (.)
nodo.style.nombrePropiedad

*/

/*
console.log(`El color del titulo es: ` + titulo.style.color)

*/

/*
Asignar un valor a la propiedad de esilo del nodo seleccionado.

  node.style.color=valor

*/

titulo.style.color="black";

titulo.style.backgroundColor="rose";

titulo.style.fontSize="64px"