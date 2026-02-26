// Obtener el formulario
const formulario = document.getElementById("formulario");
//leer el sumit del formulario
formulario.addEventListener("submit", function(event) {
    
    event.preventDefault(); 
    
    const correo = document.getElementById("correo").value;
    const mensaje = document.getElementById("mensaje");

    if (validarCorreo(correo)) {
        mensaje.style.color = "green";
        mensaje.textContent = "Correo válido. Enviando formulario...";
        
    } else {
        mensaje.style.color = "red";
        mensaje.textContent = "Por favor, ingresa un correo válido.";
    }
});

// Función para validar correo
function validarCorreo(correo) {
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return regex.test(correo);
}