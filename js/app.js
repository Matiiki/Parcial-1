// ===============================
// ELEMENTOS DEL HTML
// ===============================

const contadorCarrito = document.getElementById("contador-carrito");
const botonesAgregar = document.querySelectorAll(".boton-agregar");


// ===============================
// CARRITO
// ===============================

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


// ===============================
// ACTUALIZAR CONTADOR
// ===============================

function actualizarContador() {

    let cantidadTotal = 0;

    carrito.forEach(function(producto) {
        cantidadTotal += producto.cantidad;
    });

    contadorCarrito.textContent = cantidadTotal;
}


// Mostrar el contador al cargar la página
actualizarContador();


// ===============================
// AGREGAR PRODUCTOS
// ===============================

botonesAgregar.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const id = boton.dataset.id;
        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);

        const productoExistente = carrito.find(function(producto) {
            return producto.id === id;
        });


        if (productoExistente) {

            productoExistente.cantidad++;

        } else {

            carrito.push({
                id: id,
                nombre: nombre,
                precio: precio,
                cantidad: 1
            });

        }


        localStorage.setItem("carrito", JSON.stringify(carrito));

        actualizarContador();

        alert("Producto agregado al carrito");

    });

});