const inputCorreo = document.getElementById('email-input');
const contenedorPrincipal = document.getElementById('principal');
const contenedorSecundario = document.getElementById('secundario');
const boton = document.getElementById('boton1');
const boton2 = document.getElementById('boton2');


inputCorreo.addEventListener('input', function() {
    const correo = inputCorreo.value;
    if (validarCorreo(correo)) {
        inputCorreo.style.backgroundColor = '#C8E6C9'; // Verde si es válido
    } else {
        inputCorreo.style.backgroundColor = '#FFCDD2'; // Rojo si no es válido
    }
});
boton.addEventListener('click', function() {
    const correo = inputCorreo.value;
   
    // Si el correo es válido, ocultar el contenedor principal y mostrar el contenedor secundario
    if (validarCorreo(correo)) {
        contenedorSecundario.classList.remove('d-none');
        contenedorPrincipal.classList.add('d-none');
    } else {
        // Si el correo no es válido, mostrar un mensaje de error
        alert('Por favor, ingrese un correo electrónico válido.');
    }
});
boton2.addEventListener('click', function() {
    contenedorSecundario.classList.add('d-none');
    contenedorPrincipal.classList.remove('d-none');
});

function validarCorreo(correo) {
    // Expresión regular para validar un correo electrónico
    const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regexCorreo.test(correo);
}
