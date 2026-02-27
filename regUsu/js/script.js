const ValidarRecueri =()=>{
    // traemos los datos del html
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const telefono = document.querySelector("#tel").value.trim();
    const password = document.querySelector("#password").value.trim();

    const message = document.querySelector("#message");
    const result = document.querySelector("#result");

    //iniciamos los mensajes para mostrar resultados
    message.innerHTML = "";
    result.innerHTML = "";

    //instaseamos las validadciones 
    let regexNombre = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    let regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let regexTelefono = /^\d{10}$/;
    let regexPassword = /^(?=.*\d).{8,}$/;

    //validar con lo que trae el html
    if (name === "" || email === "" || telefono ==="" || password ===""){
        message.innerHTML = "❎Error: Todos los campos son obligatorios";
        
        return;
    } 
    if(!regexNombre.test(name)){
        message.innerHTML = "❎Error: El nombre debe de solo tener letras"
        
        return;
    }
    if(!regexCorreo.test(email)){
        message.innerHTML = "❎Error: El correo no esta en un formato valido"
        
        return;
    }
    if(!regexTelefono.test(telefono)){
        message.innerHTML = "❎Error: El telefono solo debe de tener 10 digitos numericos"
        
        return;
    }
    if(!regexPassword.test(password)){
        message.innerHTML = "❎Error: La contraseña deve de tener 8 caracteres y almenos un numero"
        
        return;
    }
    //si todo esta correcto mostrar este mensaje 
    message.innerHTML = "✅ Registro exitoso";
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