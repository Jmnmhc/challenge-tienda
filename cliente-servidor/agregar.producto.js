import { clientServices } from "./cliente-servidor.js";

const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault;
    const imagen = "direccion de la imagen"
    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const descripcion = document.querySelector("[data-descripcion]").value;
    const clase = document.querySelector("[data-clase]").value;


        clientServices.nuevoProducto(imagen, nombre, precio, descripcion, clase)
    

});


