const saveCustomer = () =>{
    const nameimput =document.querySelector('#name');
    const name = nameimput.value;

    if (name.length > 0){
        localStorage.setItem("name",name);
    }
}
const printCustomer = () =>{
    console.log(localStorage.getItem("name"))
}
const btnSave=document.querySelector ("#save");
btnSave.addEventListener('click',()=>{
    saveCustomer();
    printCustomer();
})