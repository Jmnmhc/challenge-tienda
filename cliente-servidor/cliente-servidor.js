
const listadoCartas = () => {
    return fetch("http://localhost:3000/cartas").then((respuesta) => {
        return (respuesta).json();
        });
};

    const nuevoProducto = (imagen, nombre, precio, descripcion, clase) => {
        return fetch("http://localhost:3000/cartas", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ imagen, nombre, precio, descripcion, clase, id: uuid.v4() }),
        });
      };

    const actualizarCarta = (imagen, nombre, precio, descripcion, clase, id) => {

      return fetch(`http://localhost:3000/cartas/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({imagen, nombre, precio, descripcion, clase}),
      })
      .then((respuesta) => respuesta).catch((error) => console.log(error))    
      }
        





const eliminarCarta = (id) =>{
  return fetch(`http://localhost:3000/cartas/${id}`, {
    method: "DELETE"
  })
}

const cartaDetallada = (id) =>{

    return fetch(`http://localhost:3000/cartas/${id}`).then((respuesta) => respuesta.json())
};


export const clientServices = {
    listadoCartas,
    nuevoProducto,
    eliminarCarta,
    cartaDetallada,
    actualizarCarta,
};
