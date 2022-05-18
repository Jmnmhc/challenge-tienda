import { clientServices } from "./cliente-servidor.js";

const botonBorrar = document.querySelector(".boton__borrar");
botonBorrar.addEventListener("click", () => {
    console.log("el clickazo", averiguarId ())

    clientServices.eliminarCarta(averiguarId ()).then(respuesta =>{
        console.log(respuesta)
    }).catch(error => console.log("ocurrio un error"))

})

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

    const url = new URL(window.location);
    const id = url.searchParams.get("id");
    const clase = url.searchParams.get("clase")


const seccionGrillaDetallado = document.querySelector("[data-grilladetallado]")

clientServices.listadoCartas().then((data)=>{
    data.forEach(cartas =>{

        const nuevaLinea = crearNuevaLinea(cartas.imagen, cartas.nombre, cartas.precio, cartas.descripcion, cartas.clase, cartas.id)
        
         if ( clase == cartas.clase ) {
                if ( id!= cartas.id ) {
            seccionGrillaDetallado.appendChild(nuevaLinea)
         }};

    });

}).catch((error)=> console.log("ocurrio un error aca"));

const mostrarCarta = () => {
    const url = new URL(window.location);
    const id = url.searchParams.get("id");

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
mostrarCarta();


function averiguarId (){
    const url = new URL(window.location);
    const id = url.searchParams.get("id");
return id;
}

const botonEditar = document.querySelector(".boton__editar");
botonEditar.addEventListener("click", () => {
    console.log("el clickazo de editar", averiguarId ())

    window.location.href=`./editar.html?id=${id}&clase=${clase}&nombre=${nombre}`
})
