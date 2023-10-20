//alert("Hola este es mi Javascript");

//let nombre = "Marta";
//nombre="Maria";

//var nombre1="Marta";
//const nombre2="Marta";
//nombre2="Maria";

//console.log(nombre);
//console.log(nombre1);
//console.log(nombre2);

//SELECCIONAR ELEMENTOS

/* let contenidoTitulo = "Nombre";
console.log(contenidoTitulo);

let titulo = document.querySelector(".fuente-acento");
titulo.innerHTML = contenidoTitulo;

console.log(titulo);

//CONDICIONALES

let textoTitulo=titulo.innerText;
console.log(textoTitulo);

if(textoTitulo=="Nombre"){
    titulo.innerHTML="Otro";
}else{
    console.log("No se cumple")
} 

//FUNCIONES

let nombre="Ani";
let ciudad="Bs As";
let gusto="Chocolate";

let parrafo=document.querySelector(".parrafo2");

function cambiarTexto(nombre, ciudad, gusto) {
    let contenido=
    `Soy ${nombre}, nací en ${ciudad}.Me gusta la ${gusto} y 
    ver las montañas. Me encantaría aprender a programar para 
    poder ayudar a las personas a motrar lo que hacen.`;

    return contenido;
}

parrafo.innerText=cambiarTexto(nombre,ciudad,gusto);
 */

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 caracteres`;  
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }

});




















