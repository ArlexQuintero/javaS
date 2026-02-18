const generateNumbers=()=>{
    for (i=1;1<=100;i++){
        console.log(100);
    }
}

const showdatafor=()=>{
    let numbres=[2,8,4,6,3];
    for (i=0; i<numbres.length; i++){
        console.log(numbres[i]);
        Add+=numbres[i];
    }
    console.log("la suma es: "+Add)
    let promedio=Add/Numbres.length;
    console.log("el promedio es: "+promedio);
    let pares=0;
    let inpares=0;
    for (i=0; i<Numbres.length; i++){
        if (Numbres[i]%2==0){
            pares++;
        }else{
            inpares++;
        }
    }
    console.log("la cantidad de pares es: "+pares);
    console.log("la cantidad de inpares es: "+inpares);
    

}
const ShosdataForeach=()=>{
    let Numbres=[7,1,3,4,6];
    Numbres.forEach(element => {
        console.log(element)
    })
      //calcualr el promedio y mostrar los pares eh inpares por separado
    let Add=0;
    Numbres.forEach(element => {
        Add+=element;
    });
    let promedio=Add/Numbres.length;
    console.log("el promedio es: "+promedio);
    let pares=0;
    let inpares=0;
    Numbres.forEach(element => {
        if (element%2==0){
            pares++;
        }else{
            inpares++;
        }    });
    console.log("la cantidad de pares es: "+pares);
    console.log("la cantidad de inpares es: "+inpares);
}
const mostrarProductosYPrecios=()=>{
    let productos=["manzana","pera","naranja","platano"];
    let precios=[10,20,30,40];
    let daata="";
    for (i=0; i<productos.length; i++){
        console.log(precios[i]+" "+productos[i]);
        daata+= "<tr><td>"+precios[i]+"</td><td>"+productos[i]+"</td></tr>";
    }
    
    document.getElementById("tabla").innerHTML=daata;
}
