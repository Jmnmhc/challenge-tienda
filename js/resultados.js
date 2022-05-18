import { clientServices } from "../cliente-servidor/cliente-servidor.js";


const resultadoBusquedas = localStorage.getItem("identificadores");
const arregloPasado = JSON.parse(resultadoBusquedas); // aca tengo los IDS
console.log("   RESULTADO   ",resultadoBusquedas)
console.log(" RESULTADO.LENGTH ", resultadoBusquedas.length)


const crearNuevaLinea = (imagen, nombre, precio, descripcion, clase, id) => {

    const linea = document.createElement("div")
    const contenido = 
    `
        <img alt="foto 1" class="grilla__productos___imagen" src=".${imagen}"/>
        <div class="grilla__productos___contenido">
            <h2 class="grilla__productos___contenido-titulo">${nombre}</h2>
            <p class="grilla__productos___contenido-descripcion">${precio}</p>
            <p><a class="grilla__productos___contenido-boton" href="../paginas/detallado.html?id=${id}&clase=${clase}&nombre=${nombre}">Ver producto</a></p>
            
            </div>
    `
    
    linea.innerHTML = contenido;

    const boton = linea.querySelector("a");
    const idCarta = boton.id;

    boton.addEventListener("click", ( ) => {
        console.log(idCarta)}
    );
    
    return linea
};


const seccionGrillaDetallado = document.querySelector("[data-grilladetallado]")


clientServices.listadoCartas().then((data)=>{
    data.forEach(cartas =>{

        console.log(arregloPasado)

        const nuevaLinea = crearNuevaLinea(cartas.imagen, cartas.nombre, cartas.precio, cartas.descripcion, cartas.clase, cartas.id)

        for (let i = 0; i <= arregloPasado.length; i++){

        if ( (cartas.id == arregloPasado[i])){
            console.log("aca estan las cartas",cartas.id);
            console.log("aca el array; ", arregloPasado[i])
            seccionGrillaDetallado.appendChild(nuevaLinea)
            }
    }   

    });

}).catch((error)=> console.log("ocurrio un error aca"));

const mostrarCarta = (id) => {

    const imagen = document.querySelector("[data-imagen]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    clientServices.cartaDetallada(id).then ( carta => {
        imagen.src = "." + carta.imagen;
        nombre.textContent = carta.nombre;
        precio.textContent = carta.precio;
        descripcion.textContent = carta.descripcion;

    } );
};

