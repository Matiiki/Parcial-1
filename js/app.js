// ===============================
// OBTENER ELEMENTOS DEL HTML
// ===============================

const contadorCarrito =
    document.getElementById("contador-carrito");

const botonesAgregar =
    document.querySelectorAll(".boton-agregar");


// ===============================
// RECUPERAR CARRITO
// ===============================

let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];


// ===============================
// ACTUALIZAR CONTADOR
// ===============================

function actualizarContador() {

    let cantidadTotal = 0;

    carrito.forEach(function(producto) {

        cantidadTotal =
            cantidadTotal + producto.cantidad;

    });

    contadorCarrito.textContent = cantidadTotal;
}


// Mostrar contador al cargar
actualizarContador();


// ===============================
// AGREGAR PRODUCTO
// ===============================

botonesAgregar.forEach(function(boton) {

    boton.addEventListener("click", function() {

        // Obtener información del producto

        const id =
            boton.dataset.id;

        const nombre =
            boton.dataset.nombre;

        const precio =
            Number(boton.dataset.precio);


        // Buscar si el producto ya está en el carrito

        const productoExistente =
            carrito.find(function(producto) {

                return producto.id === id;

            });


        // Si ya existe
        if (productoExistente) {

            productoExistente.cantidad++;

        }

        // Si no existe
        else {

            carrito.push({

                id: id,
                nombre: nombre,
                precio: precio,
                cantidad: 1

            });

        }


        // Guardar carrito

        localStorage.setItem(
            "carrito",
            JSON.stringify(carrito)
        );


        // Actualizar contador

        actualizarContador();


        alert("Producto agregado al carrito");

    });

});