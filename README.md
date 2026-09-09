# 🎮 NexaGear

NexaGear es una tienda web orientada a la venta de **periféricos y accesorios gamer**.

El proyecto fue desarrollado como parte de la **Evaluación Parcial N°1 de Desarrollo Fullstack II**, utilizando tecnologías de frontend como **HTML5, CSS3 y JavaScript**.

El sitio permite navegar por un catálogo de productos, consultar el detalle de cada producto, agregar productos a un carrito de compras, modificar cantidades, realizar validaciones de formularios y almacenar la información del carrito utilizando `LocalStorage`.

---

## 📌 Descripción del proyecto

NexaGear simula una tienda online especializada en productos y accesorios para gaming.

El sitio cuenta con diferentes páginas conectadas entre sí mediante una barra de navegación común, permitiendo al usuario navegar entre el inicio, catálogo de productos, registro, contacto y carrito de compras.

Entre las principales funcionalidades se encuentran:

* Página principal.
* Catálogo de productos.
* Productos destacados.
* Categorías de productos.
* Visualización individual del detalle de cada producto.
* Selección de cantidad de productos.
* Carrito de compras.
* Aumento y disminución de cantidades dentro del carrito.
* Eliminación de productos del carrito.
* Cálculo automático del total de la compra.
* Contador de productos en el carrito.
* Persistencia del carrito mediante `LocalStorage`.
* Formulario de registro.
* Validaciones mediante JavaScript.
* Formulario de contacto.
* Mensajes de error personalizados.
* Mensajes de confirmación.
* Video integrado en la página principal.
* Diseño adaptable para computadores, tablets y dispositivos móviles.

---

## 🛠️ Tecnologías utilizadas

El proyecto fue desarrollado utilizando:

* **HTML5:** estructura y contenido de las páginas.
* **CSS3:** diseño visual, estilos personalizados y diseño responsive.
* **JavaScript:** interacción del usuario, carrito de compras y validaciones.
* **LocalStorage:** almacenamiento de los productos agregados al carrito.
* **Git:** control de versiones del proyecto.
* **GitHub:** almacenamiento y administración del repositorio.
* **GitHub Pages:** publicación y ejecución del sitio web.

---

## 📂 Estructura del proyecto

La estructura del proyecto se encuentra organizada separando las páginas HTML, estilos, scripts, imágenes y contenido multimedia.

```text
Parcial-1/
│
├── css/
│   └── style.css
│
├── img/
│   ├── audifonos-hyperx.jpg
│   ├── control-xbox.jpg
│   ├── mouse-logitech.jpg
│   ├── mousepad.jpg
│   ├── teclado-hyperx.jpg
│   └── webcam.jpg
│
├── js/
│   ├── app.js
│   ├── carrito.js
│   ├── contacto.js
│   ├── producto.js
│   └── registro.js
│
├── video/
│   └── setup-gamer.mp4
│
├── carrito.html
├── contacto.html
├── index.html
├── producto.html
├── productos.html
├── registro.html
│
└── README.md
```

Esta organización permite mantener separados los diferentes componentes del proyecto, facilitando la lectura, mantenimiento y modificación del código.

---

## 🧱 Estructura HTML

El proyecto utiliza etiquetas semánticas de **HTML5** para mantener una estructura clara y organizada.

Entre las principales etiquetas utilizadas se encuentran:

* `<header>` para el encabezado del sitio.
* `<nav>` para la barra de navegación.
* `<main>` para el contenido principal.
* `<section>` para dividir las diferentes áreas de las páginas.
* `<article>` para representar productos y contenido independiente.
* `<footer>` para el pie de página.
* `<form>` para los formularios de registro y contacto.
* `<video>` para integrar contenido multimedia.

El uso de etiquetas semánticas permite mejorar la organización del código y facilita la comprensión de la estructura de cada página.

---

## 🎨 Diseño y CSS

Los estilos visuales del proyecto se encuentran separados del código HTML mediante el archivo:

```text
css/style.css
```

El archivo contiene los estilos generales utilizados en las diferentes páginas del sitio.

Entre los elementos trabajados mediante CSS se encuentran:

* Colores.
* Tipografías.
* Barra de navegación.
* Tarjetas de productos.
* Botones.
* Formularios.
* Carrito de compras.
* Mensajes de validación.
* Distribución de elementos.
* Diseño responsive.

El diseño busca mantener una apariencia moderna relacionada con el mundo gamer y tecnológico.

---

## ⚙️ JavaScript

La lógica del sitio se encuentra separada en distintos archivos JavaScript según su funcionalidad.

```text
js/app.js
js/carrito.js
js/contacto.js
js/producto.js
js/registro.js
```

### `app.js`

Contiene funciones generales utilizadas dentro del sitio.

### `carrito.js`

Administra las funcionalidades relacionadas con el carrito de compras, incluyendo:

* Mostrar los productos agregados.
* Modificar cantidades.
* Eliminar productos.
* Calcular el total.
* Actualizar el contador del carrito.
* Guardar la información utilizando `LocalStorage`.

### `producto.js`

Administra la información y comportamiento de la página de detalle de producto, permitiendo seleccionar productos y agregarlos al carrito.

### `registro.js`

Contiene las validaciones realizadas sobre el formulario de registro.

### `contacto.js`

Contiene la lógica y validaciones utilizadas en el formulario de contacto.

---

## 🛒 Carrito de compras

El carrito utiliza **LocalStorage** para conservar temporalmente los productos seleccionados por el usuario.

Gracias a esto, los productos pueden mantenerse almacenados aunque el usuario cambie entre las diferentes páginas del sitio.

El carrito permite:

* Agregar productos.
* Visualizar productos seleccionados.
* Aumentar cantidades.
* Disminuir cantidades.
* Eliminar productos.
* Calcular el precio total.
* Mostrar la cantidad total de productos mediante un contador.

---

## ✅ Validaciones de formularios

Los formularios del sitio utilizan JavaScript para comprobar la información ingresada por el usuario antes de procesarla.

Las validaciones permiten detectar campos incorrectos o incompletos y mostrar mensajes personalizados al usuario.

Entre las validaciones utilizadas se encuentran:

* Campos obligatorios.
* Validación de nombre.
* Validación de correo electrónico.
* Validación de contraseña.
* Validación de fecha de nacimiento.
* Confirmación de datos ingresados.
* Mensajes de error.
* Mensajes de confirmación.

---

## 📱 Diseño responsive

NexaGear cuenta con estilos adaptables para mejorar la visualización del sitio en diferentes tamaños de pantalla.

El sitio puede ser utilizado desde:

* Computadores.
* Notebooks.
* Tablets.
* Teléfonos móviles.

Para esto se utilizan propiedades de CSS y `media queries` que permiten reorganizar los elementos dependiendo del tamaño de la pantalla.

---

## 📄 Páginas del proyecto

### `index.html`

Página principal de NexaGear. Contiene la presentación de la tienda, productos destacados, categorías y contenido multimedia.

### `productos.html`

Contiene el catálogo general de productos disponibles en la tienda.

### `producto.html`

Permite visualizar información detallada de un producto y agregarlo al carrito.

### `carrito.html`

Muestra los productos agregados al carrito, sus cantidades, precios y el total de la compra.

### `registro.html`

Contiene el formulario de creación de cuenta y sus respectivas validaciones.

### `contacto.html`

Contiene el formulario utilizado para que el usuario pueda enviar consultas o mensajes.

---

## ▶️ Ejecución del proyecto

El proyecto puede ejecutarse descargando o clonando el repositorio.

Después de descargarlo, se debe abrir el archivo:

```text
index.html
```

También puede ejecutarse directamente mediante **GitHub Pages**.

---

## 🔗 Enlaces del proyecto

### Repositorio público

https://github.com/Matiiki/Parcial-1

### Ejecución directa mediante GitHub Pages

https://matiiki.github.io/Parcial-1/

---

## 💾 Control de versiones

El proyecto utiliza **Git y GitHub** para mantener el control de versiones.

Durante el desarrollo se realizaron diferentes commits para registrar los avances y modificaciones realizadas en el proyecto.

Esto permite mantener un historial de cambios y facilitar el desarrollo y mantenimiento del código.

---

## 🎯 Objetivo del proyecto

El objetivo de NexaGear es aplicar los conocimientos adquiridos durante la asignatura de **Desarrollo Fullstack II**, integrando HTML, CSS y JavaScript en un sitio web funcional.

El proyecto demuestra la aplicación de conceptos como:

* HTML semántico.
* Estilos CSS personalizados.
* Diseño responsive.
* Manipulación del DOM.
* Eventos de JavaScript.
* Validaciones de formularios.
* Uso de `LocalStorage`.
* Manejo de un carrito de compras.
* Organización de archivos.
* Control de versiones con Git.
* Publicación de un proyecto mediante GitHub.

---

## 👨‍💻 Autor
Felipe Marchant
Matias Acevedo
Proyecto desarrollado para la **Evaluación Parcial N°1 de Desarrollo Fullstack II**.

**NexaGear © 2026**
