const ValidarRecueri =()=>{

    // traemos los datos del html
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telefono = document.querySelector("#tel").value.trim();
    const password = document.querySelector("#password").value.trim();

    const message = document.querySelector("#message");
    const result = document.querySelector("#result");

    //iniciamos los mensajes para mostrar resultados
    message.textContent = "";
    result.innerHTML = "";
    message.style.color = "";

    //instaseamos las validadciones 
    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexTelefono = /^\d{10}$/;
    let regexPassword = /^(?=.*\d).{8,}$/;

    //validar con lo que trae el html
    if (name === "" || email === "" || telefono ==="" || password ===""){
        message.textContent = "❎Error: Todos los campos son obligatorios";
        message.style.color = "red";
        return;
    } 
    if(!regexNombre.test(name)){
        message.textContent = "❎Error: El nombre debe de solo tener letras";
        message.style.color = "red";
        return;
    }
    if(!regexCorreo.test(email)){
        message.textContent = "❎Error: El correo no esta en un formato valido";
        message.style.color = "red";
        return;
    }
    if(!regexTelefono.test(telefono)){
        message.textContent = "❎Error: El telefono solo debe de tener 10 digitos numericos";
        message.style.color = "red";
        return;
    }
    if(!regexPassword.test(password)){
        message.textContent = "❎Error: La contraseña deve de tener 8 caracteres y almenos un numero";
        message.style.color = "red";
        return;
    }

    //si todo esta correcto mostrar este mensaje 
    message.textContent = "✅ Registro exitoso";
    message.style.color = "green";

    result.innerHTML = `
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Correo:</strong> ${email}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
    `;
}

//iniciar las validaciones con el click al boton
const btnEnviar = document.querySelector("#btnEnviar");
btnEnviar.addEventListener('click', () =>{
    ValidarRecueri()
})