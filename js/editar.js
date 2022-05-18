import { clientServices } from "../cliente-servidor/cliente-servidor.js";

const imagen = document.querySelector("[data-imagen]");
const nombre = document.querySelector("[data-inputNombre]");
const precio = document.querySelector("[data-InputPrecio]");
const descripcion = document.querySelector("[data-InputDescripcion]");
const clase = document.querySelector("[data-InputClase]")
const url = new URL(window.location);
    const id = url.searchParams.get("id");



const mostrarCarta = () => {

    clientServices.cartaDetallada(id).then ( carta => {
        
        imagen.src = "." + carta.imagen;
        nombre.value = carta.nombre;
        precio.value = carta.precio;
        descripcion.value = carta.descripcion;
        clase.value = carta.clase;

    } );
};

mostrarCarta();


const botonAceptar = document.querySelector("[data-btnAceptar]");
const botonCancelar = document.querySelector("[data-btnCancelar]");

botonAceptar.addEventListener("click", (evento) =>{
    evento.preventDefault();

    clientServices.actualizarCarta(imagen.src, nombre.value, precio.value, descripcion.value, clase.value, id).then (() => {
        window.location.href=`./detallado.html?id=${id}&clase=${clase}&nombre=${nombre}`

    })
})

botonCancelar.addEventListener("click", (evento) =>{
    evento.preventDefault();
    window.location.href="../index.html"
})

