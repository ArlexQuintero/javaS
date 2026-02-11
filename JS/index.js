//funcion para las operaciones
function calcular() {
  //traer los datos y el procedimiento 
  const num1 = parseFloat(document.getElementById("Numero1").value);
  const num2 = parseFloat(document.getElementById("Numero2").value);
  const operacion = document.getElementById("operacion").value;
  let resultado;
  //crear un swicth con los diferentes parametros 
  switch (operacion) {
    case "sumar":
      resultado = num1 + num2;
      break;
    case "restar":
      resultado = num1 - num2;
      break;
    case "multiplicar":
      resultado = num1 * num2;
      break;
    case "dividir":
      //validar que el valor que no sea un 0
      if (num2 !== 0) {
        resultado = num1 / num2;
      } else {
        alert("No se puede dividir por cero.");
        return; 
      }
      break;
    default:
      //mostrar si no se seleciona nada en las operaciones
      alert("Operación no válida.");
      return; 
  }
  //enviar la respuesta para mostrarla en el html
  document.getElementById("resultado").value = resultado;
}
