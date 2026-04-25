// ================================================
// CREACIONES MARCO — contacto.js
// Envío de formulario de citas con EmailJS
// Basado en la librería Email.js
// ================================================

// Inicializar EmailJS con tu Public Key
// Reemplaza "TU_PUBLIC_KEY" con la clave de tu cuenta EmailJS
emailjs.init("Ainlk-r8tLgy71XYX");

// Capturar el formulario
const form = document.getElementById("formCita");

form.addEventListener("submit", function (e) {
    e.preventDefault(); // Evitar que recargue la página

    // Mostrar mensaje de carga
    const alerta = document.getElementById("mensajeAlert");
    alerta.textContent = "Enviando su solicitud...";
    alerta.style.color = "#1a3560";

    // Parámetros que se envían al template de EmailJS
    // Los nombres deben coincidir con las variables del template: {{nombre}}, {{telefono}}, etc.
    const parametros = {
        nombre:    document.getElementById("nombreTxt").value,
        telefono:  document.getElementById("telefonoTxt").value,
        correo:    document.getElementById("emailTxt").value,
        servicio:  document.getElementById("servicioTxt").value,
        fecha:     document.getElementById("fechaTxt").value,
        hora:      document.getElementById("horaTxt").value,
        comentarios: document.getElementById("comentariosTxt").value
    };

    // Enviar usando EmailJS
    // Reemplaza "TU_SERVICE_ID" y "TU_TEMPLATE_ID" con los tuyos
    emailjs.send("service_jsxffu5", "template_1qh8qjp", parametros)
        .then(function () {
            // Éxito
            alerta.textContent = "✓ Su solicitud fue enviada. Le contactaremos en 24 horas.";
            alerta.style.color = "#1a6b2a";
            form.reset(); // Limpiar el formulario
        })
        .catch(function (error) {
            // Error
            alerta.textContent = "✗ Ocurrió un error. Por favor intente de nuevo.";
            alerta.style.color = "#9b1c1c";
            console.error("Error EmailJS:", error);
        });
});
