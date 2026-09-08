// ===============================
// OBTENER ELEMENTOS
// ===============================

const listaCarrito =
    document.getElementById("lista-carrito");

const totalCarrito =
    document.getElementById("total-carrito");

const contadorCarrito =
    document.getElementById("contador-carrito");

const botonVaciar =
    document.getElementById("vaciar-carrito");

const botonComprar =
    document.getElementById("comprar");


// ===============================
// RECUPERAR CARRITO
// ===============================

let carrito =
    JSON.parse(localStorage.getItem("carrito")) || [];


// ===============================
// MOSTRAR CARRITO
// ===============================

function mostrarCarrito() {

    // Limpiar contenido

    listaCarrito.innerHTML = "";


    // Si está vacío

    if (carrito.length === 0) {

        listaCarrito.innerHTML =
            "<p>Tu carrito está vacío.</p>";

        totalCarrito.textContent = "0";

        contadorCarrito.textContent = "0";

        return;
    }


    let total = 0;

    let cantidadTotal = 0;


    // Recorrer productos

    carrito.forEach(function(producto, indice) {

        // Calcular subtotal

        const subtotal =
            producto.precio * producto.cantidad;


        total = total + subtotal;

        cantidadTotal =
            cantidadTotal + producto.cantidad;


        // Crear elemento

        const productoHTML =
            document.createElement("article");


        productoHTML.innerHTML = `

            <h3>${producto.nombre}</h3>

            <p>
                Precio:
                $${producto.precio.toLocaleString("es-CL")}
            </p>

            <p>
                Cantidad:
                ${producto.cantidad}
            </p>

            <p>
                Subtotal:
                $${subtotal.toLocaleString("es-CL")}
            </p>

            <button 
                class="aumentar"
                data-indice="${indice}"
            >
                +
            </button>

            <button 
                class="disminuir"
                data-indice="${indice}"
            >
                -
            </button>

            <button 
                class="eliminar"
                data-indice="${indice}"
            >
                Eliminar
            </button>

            <hr>

        `;


        listaCarrito.appendChild(productoHTML);

    });


    // Mostrar total

    totalCarrito.textContent =
        total.toLocaleString("es-CL");


    // Mostrar cantidad

    contadorCarrito.textContent =
        cantidadTotal;


    agregarEventos();

}


// ===============================
// BOTONES + - ELIMINAR
// ===============================

function agregarEventos() {


    // BOTONES AUMENTAR

    const botonesAumentar =
        document.querySelectorAll(".aumentar");


    botonesAumentar.forEach(function(boton) {

        boton.addEventListener("click", function() {

            const indice =
                Number(boton.dataset.indice);


            carrito[indice].cantidad++;


            guardarCarrito();

        });

    });


    // BOTONES DISMINUIR

    const botonesDisminuir =
        document.querySelectorAll(".disminuir");


    botonesDisminuir.forEach(function(boton) {

        boton.addEventListener("click", function() {

            const indice =
                Number(boton.dataset.indice);


            carrito[indice].cantidad--;


            // Si llega a 0

            if (carrito[indice].cantidad <= 0) {

                carrito.splice(indice, 1);

            }


            guardarCarrito();

        });

    });


    // BOTONES ELIMINAR

    const botonesEliminar =
        document.querySelectorAll(".eliminar");


    botonesEliminar.forEach(function(boton) {

        boton.addEventListener("click", function() {

            const indice =
                Number(boton.dataset.indice);


            carrito.splice(indice, 1);


            guardarCarrito();

        });

    });

}


// ===============================
// GUARDAR CARRITO
// ===============================

function guardarCarrito() {

    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );


    mostrarCarrito();

}


// ===============================
// VACIAR CARRITO
// ===============================

botonVaciar.addEventListener(
    "click",
    function() {

        carrito = [];

        guardarCarrito();

    }
);


// ===============================
// COMPRAR
// ===============================

botonComprar.addEventListener(
    "click",
    function() {

        if (carrito.length === 0) {

            alert(
                "El carrito está vacío."
            );

            return;
        }


        alert(
            "Compra realizada correctamente."
        );


        carrito = [];

        guardarCarrito();

    }
);


// ===============================
// INICIAR
// ===============================

mostrarCarrito();