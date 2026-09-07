console.log("registro.js está funcionando");

const formulario = document.getElementById("form-registro");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    // OBTENER LOS CAMPOS DEL FORMULARIO

    const nombre = document.getElementById("nombre");

    const apellido = document.getElementById("apellido");

    const correo = document.getElementById("correo");

    const contrasena = document.getElementById("contrasena");

    const confirmarContrasena =
        document.getElementById("confirmar-contrasena");

    const fechaNacimiento =
        document.getElementById("fecha-nacimiento");
    
    const fecha = new Date();    


    // OBTENER LOS MENSAJES DE ERROR

    const errorNombre =
        document.getElementById("error-nombre");

    const errorApellido =
        document.getElementById("error-apellido");

    const errorCorreo =
        document.getElementById("error-correo");

    const errorContrasena =
        document.getElementById("error-contrasena");

    const errorConfirmarContrasena =
        document.getElementById("error-confirmar-contrasena");

    const errorFecha =
        document.getElementById("error-fecha");

    const mensajeExito =
        document.getElementById("mensaje-exito");


    // LIMPIAR MENSAJES ANTERIORES

    errorNombre.textContent = "";

    errorApellido.textContent = "";

    errorCorreo.textContent = "";

    errorContrasena.textContent = "";

    errorConfirmarContrasena.textContent = "";

    errorFecha.textContent = "";

    mensajeExito.textContent = "";


    // VARIABLE PARA SABER SI TODO ESTÁ CORRECTO

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


    // VALIDAR APELLIDO

    if (apellido.value.trim() === "") {

        errorApellido.textContent =
            "El apellido es obligatorio.";

        formularioValido = false;

    } else if (apellido.value.trim().length < 2) {

        errorApellido.textContent =
            "El apellido debe tener al menos 2 caracteres.";

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


    // VALIDAR CONTRASEÑA

    if (contrasena.value === "") {

        errorContrasena.textContent =
            "La contraseña es obligatoria.";

        formularioValido = false;

    } else if (contrasena.value.length < 8) {

        errorContrasena.textContent =
            "La contraseña debe tener al menos 8 caracteres.";

        formularioValido = false;
    }


    // VALIDAR CONFIRMACIÓN DE CONTRASEÑA

    if (confirmarContrasena.value === "") {

        errorConfirmarContrasena.textContent =
            "Debe confirmar su contraseña.";

        formularioValido = false;

    } else if (
        confirmarContrasena.value !== contrasena.value
    ) {

        errorConfirmarContrasena.textContent =
            "Las contraseñas no coinciden.";

        formularioValido = false;
    }


    

    // VALIDAR FECHA DE NACIMIENTO

    if (fechaNacimiento.value === "") {

        errorFecha.textContent =
            "Seleccione su fecha de nacimiento.";

        formularioValido = false;

    }else {

    const fechaIngresada =
        new Date(fechaNacimiento.value + "T00:00:00");

    if (fechaIngresada > fecha) {

        errorFecha.textContent =
            "La fecha de nacimiento no puede ser futura.";

        formularioValido = false;
    }
}
        



    // SI TODO ESTÁ CORRECTO

    if (formularioValido) {

        mensajeExito.textContent =
            "Cuenta creada correctamente.";

        formulario.reset();
    }

});