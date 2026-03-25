const Sum =(a,b)=>{
    return new Promise((resolve,reject)=>{
        if (typeof a === "number" && typeof b ==="number"){
            resolve(a+b);

        }else{
            reject("no son caracteres numericos")
        }
    })
}
Sum(7,2)
.then (res => console.log (`la suma de 7 + 2 es: ${res}`))
.catch (err => console.log (`${err}`))
.finally(console.log ("promesa finalizada"))