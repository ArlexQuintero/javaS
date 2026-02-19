const ShowString =()=>{
    const menssage ="Hola, hoy es juEves";
    let Vocales =0
    for (let i = 0; i < menssage.length; i++) {
        console.log(menssage[i].toUpperCase());
        
        //contar vocales
        if (menssage[i].toLowerCase() === "a" || menssage[i].toLowerCase() === "e" || menssage[i].toLowerCase() === "i" || menssage[i].toLowerCase() === "o" || menssage[i].toLowerCase() === "u") {
            Vocales++;
        }
    }
    console.log("Número de vocales:", Vocales);

}
const NoVocals=()=>{
     const menssage ="Hola, hoy es juEves";
    let NoVocales =0
    for (let i = 0; i < menssage.length; i++) {
        //contar no vocales
        if (menssage[i].toLowerCase() !== "a" && menssage[i].toLowerCase() !== "e" && menssage[i].toLowerCase() !== "i" && menssage[i].toLowerCase() !== "o" && menssage[i].toLowerCase() !== "u") {
            NoVocales++;
        }
    }
    console.log("Número de no vocales:", NoVocales);
}


const btn=document.getElementById("btnShowString");
btn.addEventListener("click",()=>{
    console.log("vocales:"+ShowString("hoy es jueves"));
    console.log("no vocales:"+NoVocals());

    //definicion de un obj
    const Product={
        id:22,
        name:"Laptop",
        price:1000,
        category:"Electronics"
    };
    console.log(Product);
    console.log("ID:",Product.id);
    console.log("vocales:"+ShowString(Product.name));
});