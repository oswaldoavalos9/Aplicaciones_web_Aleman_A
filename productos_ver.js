// Obtener el valor del parámetro URL
const ParametroURL = new URLSearchParams(window.location.search);
const id_producto = parseInt(ParametroURL.get('id_producto'), 10);

// Datos de los productos
const productos = {
    1: {
        nombre: "cubo 3X3",
        imagen: "assets/cubo de rubik 3x3.jpg",
        descripcion: "cubo de rubik 3X3",
        precio: "$349.00"
    },
    2: {
        nombre: "GUARDA ROPAS",
        imagen: "assets/pyramix.jpg",
        descripcion: "cubo de rubik piranmix",
        precio: "$299.00"
    },
    3: {
        nombre: "SILLÓN",
        imagen: "assets/puzzle_metal 2.jpg",
        descripcion: "puzzle de metal",
        precio: "$150.00"
    },
    4: {
        nombre: "SILLÓN",
        imagen: "assets/puzzle_madera.jpg",
        descripcion: "puzzle de madera",
        precio: "$200.00"
    },
};

// Actualizar etiquetas de texto HTML según el producto
if (productos[id_producto]) {
    document.getElementById("nombre_producto").textContent = productos[id_producto].nombre;
    document.getElementById("img_pto").src = productos[id_producto].imagen;
    document.getElementById("descripcion_pto").textContent = productos[id_producto].descripcion;
    document.getElementById("precio_pto").textContent = productos[id_producto].precio;
} else {
    document.getElementById("nombre_producto").textContent = "El producto no existe";
    document.getElementById("img_pto").style.display = "none";
    document.getElementById("descripcion_pto").textContent = "NULL";
    document.getElementById("precio_pto").textContent = "NULL";
}
