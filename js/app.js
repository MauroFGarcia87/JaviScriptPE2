const productos = [
  {
  nombre: "leña",
  cantidad: 100,
}
];

let num = 0;

let productoNombre = document.getElementById("nombreProducto").value;
const formProducto = document.getElementById("formProducto");
const sectionProductos = document.getElementById("mostrarProducto");

formProducto.addEventListener("submit", agregar);

function borrarLista(){
  let containerMostrarProdcutos = document.getElementById('containerMostrarProdcutos');
  let contenedor = document.getElementById('mostrarProductos');
  contenedor.remove()
  let divMostrarProductos = document.createElement("div");
  divMostrarProductos.innerHTML = `<div id="mostrarProductos">`
  containerMostrarProdcutos.append(divMostrarProductos);
}

function agregar(e) {
  e.preventDefault();
  let productoNombre = document.getElementById("nombreProducto").value;
  let productoCantidad = document.getElementById("cantidadProducto").value;
  let nuevoProducto = {
    nombre: productoNombre,
    cantidad: productoCantidad,
  };

  productos.push(nuevoProducto);
  console.log(productos);
 
  borrarLista();
  mostrarProductos(productos);
  
}

function mostrarProductos(productos) {
  
  let contenedorProductos = document.getElementById("mostrarProductos");
  console.log(contenedorProductos);
  for (const producto of productos) {
    contenedor = document.createElement("div")
    contenedor.innerHTML = `<div  class="d-flex ">
                                        <h5 class="mx-5">Producto: </h5>
                                        <p>  ${producto.nombre}</p>
                                        <h5 class="mx-5">Cantidad: </h5>
                                        <p>  ${producto.cantidad}</p>`;
    contenedorProductos.appendChild(contenedor);
  }

}

mostrarProductos(productos);

console.log(productos);
