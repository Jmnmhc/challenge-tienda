import { clientServices } from "../cliente-servidor/cliente-servidor.js";

const arregloNombre = [];
const arregloClase = [];
const arregloDescripcion = [];
const arregloId = [];

clientServices.listadoCartas().then((data)=>{
    data.forEach(cartas =>{

        
        arregloNombre.push(cartas.nombre);
        arregloClase.push(cartas.clase);
        arregloDescripcion.push(cartas.descripcion);
        arregloId.push(cartas.id);
        
    });

}).catch((error)=> console.log("ocurrio un error aca", error));


// 
const cuadroBusqueda = document.querySelector(".busqueda__cuadro___texto");
cuadroBusqueda.addEventListener("click", () => {

    const arregloIdEncontrado = [];//en este arreglo voy a almacenar los ID de las cartas encontradas para mostrar

const busqueda = cuadroBusqueda.value.toLowerCase();

if (busqueda == "") {
        console.log("el cuadro esta igual");
    }

else {

    for ( let i = 0; i < arregloNombre.length; i++ ){
        if ( busqueda == arregloNombre[i].toLowerCase() ){
            console.log("se encontró el nombre");
            arregloIdEncontrado.push(arregloId[i]);

        }
        else if ( busqueda == arregloClase[i].toLowerCase() ){
            console.log("se encontró la clase");
            arregloIdEncontrado.push(arregloId[i]);

        }
        else if ( busqueda == arregloDescripcion[i].toLowerCase() ){
            console.log("se encontró la descripcion");
            arregloIdEncontrado.push(arregloId[i]);

        }
        else {
            console.log("no se encontró nada")}
    }
    console.log(arregloIdEncontrado)



    localStorage.setItem("identificadores", JSON.stringify(arregloIdEncontrado));


    window.open("./paginas/buscadas.html")

}

})















