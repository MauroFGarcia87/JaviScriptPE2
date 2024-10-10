const productos = [
  {
    nombre: "Caña",
    cantidad: 10
  },
];

let num = 0;

let productoNombre = document.getElementById('nombreProducto').value;
const formProducto = document.getElementById('formProducto');
const sectionProductos = document.getElementById('mostrarProducto');

formProducto.addEventListener('submit', agregar);



function agregar(e){
    e.preventDefault();
    let productoNombre = document.getElementById('nombreProducto').value;
    let productoCantidad = document.getElementById('cantidadProducto').value;
    let nuevoProducto = {
        nombre: productoNombre,
        cantidad: productoCantidad
    }

    productos.push(nuevoProducto);
    console.log(productos);
}

console.log(productos);



