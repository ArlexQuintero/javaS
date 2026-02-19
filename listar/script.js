// Definicion del array de objetos y yenarlo con datos de estudiantes
const students = [
    {nombre: "Camila", edad: 20, carrera: "Enfermeria"},
    {nombre: "Sebastian", edad: 22, carrera: "Diseño"},
    {nombre: "Evelyn", edad: 21, carrera: "Administracion"},
];

// Usamos un ciclo para poder listar los datos del array y mostrar por consola
console.log("--- Lista de Estudiantes ---");

students.forEach((student, index) =>{
    console.log(`${index + 1}. Nombre: ${student.nombre} | Carrera: ${student.carrera}`);
});