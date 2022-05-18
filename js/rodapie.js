const texto = document.getElementById("contacto__texto");
const nombre = document.getElementById("contacto__nombre");
let estadoNombre = false;
let estadoTexto = false;

const botonCharlar = document.querySelector(".formulario__contacto___marco-item--boton").addEventListener("click", function( evento ){
  let compararNombre = validarNombre(nombre.value);
    let compararTexto = validarTexto(texto.value);

    if ( compararNombre == "correcto"){
      console.log("el nombre ingresado es correcto")
      estadoNombre = true;
       nombre.parentElement.querySelector("#spanNombre").innerHTML = ""
    }
    else if ( compararNombre == "vacio"){
        estadoNombre = false;
       nombre.parentElement.querySelector("#spanNombre").innerHTML = "el campo Nombre no puede estar vacío"
    }
    else if ( compararNombre == "incorrecto"){
        estadoNombre = false;
        nombre.parentElement.querySelector("#spanNombre").innerHTML = "el campo Nombre tener mas de 40 caracteres"
     }
 
    if ( compararTexto ){
      estadoTexto = true;
       texto.parentElement.querySelector("#spanTexto").innerHTML = "";

    }
    else {
        estadoTexto = false;
       texto.parentElement.querySelector("#spanTexto").innerHTML = ("el mensaje tiene que tener entre 1 y 120 caracteres")
    }


    if ( estadoNombre && estadoTexto ){
       location.replace('../paginas/mensajes/mensajeExitoso.html');
    };

});

function validarNombre (nombre){

 let compararNombre = "";

 if ( nombre.length == 0 ) {
   compararNombre = "vacio";
 }
 else{
   if ( nombre.length > 40 ) {
     compararNombre = "incorrecto";
   }
   else {
     compararNombre = "correcto";
   }; 
 };

 return compararNombre;

};

function validarTexto (texto){

    if ( (texto.length > 0 ) && ( texto.length < 121) ){
        return true;

    }
    else {
        return false;
    }
  };
