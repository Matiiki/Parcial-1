// OBTENER CONTADOR DEL CARRITO
const contadorCarrito =
    document.getElementById("contador-carrito");


// RECUPERAR CANTIDAD GUARDADA
let cantidadCarrito =
    Number(localStorage.getItem("cantidadCarrito")) || 0;


// MOSTRAR CANTIDAD AL CARGAR LA PÁGINA
contadorCarrito.textContent = cantidadCarrito;


// OBTENER BOTONES DE AGREGAR AL CARRITO
const botonesAgregar =
    document.querySelectorAll(".producto button, .boton-carrito");


// RECORRER TODOS LOS BOTONES
botonesAgregar.forEach(function(boton) {

    boton.addEventListener("click", function() {

        let cantidadAgregar = 1;


        // SI ESTAMOS EN LA PÁGINA DETALLE DEL PRODUCTO
        if (boton.classList.contains("boton-carrito")) {

            const cantidadProducto =
                document.getElementById("cantidad-producto");

            cantidadAgregar =
                Number(cantidadProducto.value);


            // VALIDAR CANTIDAD
            if (
                cantidadAgregar < 1 ||
                cantidadAgregar > 10
            ) {

                alert(
                    "La cantidad debe estar entre 1 y 10."
                );

                return;
            }

        }


        // SUMAR PRODUCTOS
        cantidadCarrito =
            cantidadCarrito + cantidadAgregar;


        // GUARDAR EN EL NAVEGADOR
        localStorage.setItem(
            "cantidadCarrito",
            cantidadCarrito
        );


        // ACTUALIZAR CONTADOR
        contadorCarrito.textContent =
            cantidadCarrito;

    });

});