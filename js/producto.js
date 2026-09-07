// ==========================================
// INFORMACIÓN DE LOS PRODUCTOS
// ==========================================

const productos = {


    // MOUSE
    mouse: {

        nombre: "Logitech G203",

        categoria: "Mouse Gamer",

        precio: "$29.990",

        imagen: "img/mouse-logitech.jpg",

        descripcion:
            "Mouse gamer con iluminación RGB y sensor de alta precisión, diseñado para entregar una experiencia rápida y cómoda durante tus partidas.",

        caracteristicas: [

            "Sensor de hasta 8.000 DPI",

            "Iluminación RGB",

            "6 botones programables",

            "Conexión USB",

            "Compatible con Windows"

        ]

    },



    // TECLADO
    teclado: {

        nombre: "HyperX Alloy Origins",

        categoria: "Teclado Gamer",

        precio: "$54.990",

        imagen: "img/teclado-hyperx.jpg",

        descripcion:
            "Teclado mecánico gamer con iluminación RGB y estructura resistente de aluminio.",

        caracteristicas: [

            "Switches mecánicos",

            "Iluminación RGB",

            "Estructura de aluminio",

            "Conexión USB",

            "Compatible con PC"

        ]

    },



    // AUDÍFONOS
    audifonos: {

        nombre: "HyperX Cloud II",

        categoria: "Audífonos Gamer",

        precio: "$59.990",

        imagen: "img/audifonos-hyperx.jpg",

        descripcion:
            "Audífonos gamer diseñados para entregar comodidad y sonido envolvente durante largas sesiones de juego.",

        caracteristicas: [

            "Sonido envolvente",

            "Micrófono desmontable",

            "Almohadillas acolchadas",

            "Control de volumen",

            "Compatible con PC y consolas"

        ]

    },



    // MOUSEPAD
    mousepad: {

        nombre: "Mousepad XL",

        categoria: "Accesorios Gamer",

        precio: "$14.990",

        imagen: "img/mousepad.jpg",

        descripcion:
            "Mousepad gamer de gran tamaño diseñado para entregar espacio suficiente para teclado y mouse.",

        caracteristicas: [

            "Tamaño XL",

            "Superficie suave",

            "Base antideslizante",

            "Bordes reforzados",

            "Ideal para gaming"

        ]

    },



    // CONTROL
    control: {

        nombre: "Control Xbox",

        categoria: "Controles",

        precio: "$59.990",

        imagen: "img/control-xbox.jpg",

        descripcion:
            "Control inalámbrico con diseño ergonómico, compatible con consolas Xbox y computadores.",

        caracteristicas: [

            "Conexión inalámbrica",

            "Compatible con Xbox",

            "Compatible con Windows",

            "Diseño ergonómico",

            "Entrada para audífonos"

        ]

    },



    // WEBCAM
    webcam: {

        nombre: "Logitech C920",

        categoria: "Webcam",

        precio: "$69.990",

        imagen: "img/webcam.jpg",

        descripcion:
            "Webcam Full HD ideal para streaming, videollamadas, clases online y creación de contenido.",

        caracteristicas: [

            "Resolución Full HD",

            "1080p",

            "Micrófono integrado",

            "Conexión USB",

            "Compatible con Windows"

        ]

    }

};



// ==========================================
// OBTENER ID DEL PRODUCTO DESDE LA URL
// ==========================================

const parametros =
    new URLSearchParams(window.location.search);


const idProducto =
    parametros.get("id");



// ==========================================
// BUSCAR PRODUCTO
// ==========================================

const producto =
    productos[idProducto];



// ==========================================
// MOSTRAR PRODUCTO
// ==========================================

if (producto) {


    // NOMBRE
    document.getElementById(
        "nombre-producto"
    ).textContent = producto.nombre;



    // CATEGORÍA
    document.getElementById(
        "categoria-producto"
    ).textContent = producto.categoria;



    // PRECIO
    document.getElementById(
        "precio-producto"
    ).textContent = producto.precio;



    // DESCRIPCIÓN
    document.getElementById(
        "descripcion-producto"
    ).textContent = producto.descripcion;



    // ======================================
    // IMAGEN
    // ======================================

    const imagenProducto =
        document.getElementById(
            "imagen-producto"
        );


    imagenProducto.src =
        producto.imagen;


    imagenProducto.alt =
        producto.nombre;



    // ======================================
    // CARACTERÍSTICAS
    // ======================================

    const listaCaracteristicas =
        document.getElementById(
            "caracteristicas-producto"
        );


    producto.caracteristicas.forEach(
        function(caracteristica) {


            const elementoLista =
                document.createElement("li");


            elementoLista.textContent =
                caracteristica;


            listaCaracteristicas.appendChild(
                elementoLista
            );

        }
    );



    // ======================================
    // TÍTULO DE LA PÁGINA
    // ======================================

    document.title =
        "NexaGear | " + producto.nombre;


} else {


    // SI EL PRODUCTO NO EXISTE

    document.getElementById(
        "nombre-producto"
    ).textContent =
        "Producto no encontrado";


    document.getElementById(
        "descripcion-producto"
    ).textContent =
        "No se pudo encontrar la información del producto seleccionado.";

}