function validarName(name){
    const regex= /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;
    return regex.test(name)
}
function validarEmail(email) {
    
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    return regex.test(email);
}
function validarTel(){
    const regex= /^\d{10}$/;

    return regex.test(telefono);
}
function validarPassword(password){
    const regex= /^(?=.*\d).{8,}$/;

    return regex.test(password);
}