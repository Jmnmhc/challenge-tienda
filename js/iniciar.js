const mail = document.getElementById("textoMail");
const pass = document.getElementById("textoPass");
let estadoMail = false;
let estadoPass = false;

const botonIniciar = document.querySelector(".login__marco-item--boton").addEventListener("click", function( evento ){
    
    let compararMail = validarMail(mail.value);
    let compararPass = validarPass(pass.value);

    if ( compararMail == "correcto"){
      console.log("el mail ingresado es correcto")
      estadoMail = true;
      mail.parentElement.querySelector("#spanMail").innerHTML = ""
    }
    else if ( compararMail == "vacio"){
      mail.parentElement.querySelector("#spanMail").innerHTML = "el campo mail no puede estar vacío"
    }
    else if ( compararMail == "incorrecto"){
      mail.parentElement.querySelector("#spanMail").innerHTML = "el formato del mail es incorrecto (xxx@xxx.xxx)"
    }

    if ( compararPass ){
      estadoPass = true;
      console.log(estadoPass)
      pass.parentElement.querySelector("#spanPass").innerHTML = "";

    }
    else {
      pass.parentElement.querySelector("#spanPass").innerHTML = ("La contraseña tener entre 6 y 15 caracteres, " + "al menos una letra mayúscula, una minúscula, un numero, " + "un caracter especial y no puede contener espacios en blanco")
    }


    if ( estadoMail && estadoPass ){

      location.replace('./mensajes/registroExitoso.html');
    }

});

function validarMail (mail){

let emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
let compararMail = "";

if ( mail.length == 0 ) {
  compararMail = "vacio";
}
else{
  if (emailRegex.test(mail)) {
    compararMail = "correcto";
  }
  else {
    compararMail = "incorrecto";
  }; 
};

return compararMail;

};

function validarPass (pass){

      let passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){6,15}$/;
  
      if (passRegex.test(pass)) {
        return true;
      } else {
        return false;
      }  

  };
