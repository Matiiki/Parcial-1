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


// Mostrar contador al cargar la página
actualizarContador();


// ===============================
// AGREGAR PRODUCTOS
// ===============================

botonesAgregar.forEach(function(boton) {

    boton.addEventListener("click", function() {

        const id = boton.dataset.id;
        const nombre = boton.dataset.nombre;
        const precio = Number(boton.dataset.precio);

        // Buscar cantidad seleccionada
        const campoCantidad = document.getElementById("cantidad-producto");

        let cantidad = 1;

        if (campoCantidad) {
            cantidad = Number(campoCantidad.value);

            if (cantidad < 1) {
                cantidad = 1;
            }

            if (cantidad > 10) {
                cantidad = 10;
            }
        }


        // Verificar que el botón tenga los datos
        if (!id || !nombre || !precio) {
            alert("No se pudo obtener la información del producto.");
            return;
        }


        // Buscar si el producto ya está en el carrito
        const productoExistente = carrito.find(function(producto) {
            return producto.id === id;
        });


        if (productoExistente) {

            productoExistente.cantidad += cantidad;

        } else {

            carrito.push({
                id: id,
                nombre: nombre,
                precio: precio,
                cantidad: cantidad
            });

        }


        // Guardar carrito
        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );


        // Actualizar contador
        actualizarContador();


        // Mensaje
        alert("Producto agregado al carrito");

    });

});
