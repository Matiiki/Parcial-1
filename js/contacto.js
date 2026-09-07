const formularioContacto = document.getElementById("form-contacto");

formularioContacto.addEventListener("submit", function(event) {

    event.preventDefault();


    // OBTENER CAMPOS

    const nombre =
        document.getElementById("nombre-contacto");

    const correo =
        document.getElementById("correo-contacto");

    const motivo =
        document.getElementById("motivo");

    const asunto =
        document.getElementById("asunto");

    const mensaje =
        document.getElementById("mensaje");


    // OBTENER MENSAJES DE ERROR

    const errorNombre =
        document.getElementById("error-nombre-contacto");

    const errorCorreo =
        document.getElementById("error-correo-contacto");

    const errorMotivo =
        document.getElementById("error-motivo");

    const errorAsunto =
        document.getElementById("error-asunto");

    const errorMensaje =
        document.getElementById("error-mensaje");

    const mensajeExito =
        document.getElementById("mensaje-exito-contacto");


    // LIMPIAR ERRORES ANTERIORES

    errorNombre.textContent = "";
    errorCorreo.textContent = "";
    errorMotivo.textContent = "";
    errorAsunto.textContent = "";
    errorMensaje.textContent = "";
    mensajeExito.textContent = "";


    let formularioValido = true;


    // VALIDAR NOMBRE

    if (nombre.value.trim() === "") {

        errorNombre.textContent =
            "El nombre es obligatorio.";

        formularioValido = false;

    } else if (nombre.value.trim().length < 2) {

        errorNombre.textContent =
            "El nombre debe tener al menos 2 caracteres.";

        formularioValido = false;
    }


    // VALIDAR CORREO

    const expresionCorreo =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (correo.value.trim() === "") {

        errorCorreo.textContent =
            "El correo electrónico es obligatorio.";

        formularioValido = false;

    } else if (
        !expresionCorreo.test(correo.value.trim())
    ) {

        errorCorreo.textContent =
            "Ingrese un correo electrónico válido.";

        formularioValido = false;
    }


    // VALIDAR MOTIVO

    if (motivo.value === "") {

        errorMotivo.textContent =
            "Seleccione un motivo de contacto.";

        formularioValido = false;
    }


    // VALIDAR ASUNTO

    if (asunto.value.trim() === "") {

        errorAsunto.textContent =
            "El asunto es obligatorio.";

        formularioValido = false;

    } else if (asunto.value.trim().length < 5) {

        errorAsunto.textContent =
            "El asunto debe tener al menos 5 caracteres.";

        formularioValido = false;
    }


    // VALIDAR MENSAJE

    if (mensaje.value.trim() === "") {

        errorMensaje.textContent =
            "El mensaje es obligatorio.";

        formularioValido = false;

    } else if (mensaje.value.trim().length < 10) {

        errorMensaje.textContent =
            "El mensaje debe tener al menos 10 caracteres.";

        formularioValido = false;
    }


    // SI TODO ESTÁ CORRECTO

    if (formularioValido) {

        mensajeExito.textContent =
            "Mensaje enviado correctamente.";

        formularioContacto.reset();
    }

});