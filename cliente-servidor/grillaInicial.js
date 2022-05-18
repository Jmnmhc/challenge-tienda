import {clientServices} from "./cliente-servidor.js"

const crearNuevaLinea = (imagen, nombre, precio, descripcion, clase, id) => {

    const linea = document.createElement("div")
    const contenido = 
    `
        <img alt="foto 1" class="grilla__productos___imagen" src="${imagen}"/>
        <div class="grilla__productos___contenido">
            <h2 class="grilla__productos___contenido-titulo">${nombre}</h2>
            <p class="grilla__productos___contenido-descripcion">${precio}</p>
            <p><a class="grilla__productos___contenido-boton" href="../paginas/detallado.html?id=${id}&clase=${clase}&nombre=${nombre}">Ver producto</a></p>
            
            </div>
    `
    
    linea.innerHTML = contenido;

    const boton = linea.querySelector("a");

    boton.addEventListener("click", ( ) => {
    }
    );
    
    return linea
};

const seccionStars = document.querySelector("[data-seccionStars]")
const seccionConsolas = document.querySelector("[data-seccionConsolas]")
const seccionDiversos = document.querySelector("[data-seccionDiversos]")



clientServices.listadoCartas().then((data)=>{
    data.forEach(cartas =>{

        const nuevaLinea = crearNuevaLinea(cartas.imagen, cartas.nombre, cartas.precio, cartas.descripcion, cartas.clase, cartas.id)


        if ( (cartas.clase == "Star Wars")){
        
            seccionStars.appendChild(nuevaLinea);

        }
        if ( (cartas.clase == "Consolas") ){

                seccionConsolas.appendChild(nuevaLinea);
            }
        if ( cartas.clase == "Diversos"){

                seccionDiversos.appendChild(nuevaLinea);
            }
   

        });

}).catch((error)=> console.log("ocurrio un error"));




