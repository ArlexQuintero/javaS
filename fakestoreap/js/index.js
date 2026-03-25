// const url = "https://fakestoreapi.com/products";

// fetch(url)
//     .then(response => response.json())
//     .then(data => {
//         console.log("Datos traidos de la API:", data);
//         localStorage.setItem("products", JSON.stringify(data));
//         displayProducts(data);
//     })
//     .catch(error => console.log("Error en el fetch:", error));
// //mostrar los datos del local storage

const displayProducts = (products) => {
    console.log("Mostrando productos:", products);
    const productsContainer = document.querySelector("#contenedor");
    productsContainer.innerHTML = ""; // limpiar antes de mostrar
    products.forEach(product => {
        const productElement = document.createElement("div");
        productElement.innerHTML = `
            <h2>${product.id}</h2>
            <h2>${product.title}</h2>
            <h2>${product.price}</h2>
            <h2>${product.category}</h2>
            <h2>${product.description}</h2>
        `;
        productsContainer.appendChild(productElement);
    });
};

document.addEventListener("DOMContentLoaded", () => {
    // Intentar recuperar productos del localStorage
    const storedProducts = localStorage.getItem("products");
    if (storedProducts) {
        const products = JSON.parse(storedProducts);
        displayProducts(products);
    }else {
        // Si no hay nada en localStorage, usar la API
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(data => {
                // Guardar en localStorage
                localStorage.setItem("products", JSON.stringify(data));
                // Mostrar en pantalla
                displayProducts(data);
            })
            .catch(error => console.error("Error al cargar API:", error));
    }
});

const addProduct = (product) => {
    console.log("Agregando producto:", product);
    const products = JSON.parse(localStorage.getItem("products"));
    products.push(product);
    localStorage.setItem("products", JSON.stringify(products));
    console.log("Producto agregado. Total de productos:", products.length);
}
const editProduct = (id, newProduct) => {
    console.log("Editando producto con ID:", id, "Nuevo producto:", newProduct);
    const products = JSON.parse(localStorage.getItem("products"));
    const index = products.findIndex(product => product.id === id);
    if (index !== -1) {
        products[index] = newProduct;
        localStorage.setItem("products", JSON.stringify(products));
        console.log("Producto editado exitosamente");
    } else {
        console.log("Producto no encontrado con ID:", id);
    }
}
const deleteProduct = (id) => {
    console.log("Eliminando producto con ID:", id);
    const products = JSON.parse(localStorage.getItem("products"));
    const newProducts = products.filter(product => product.id !== id);
    localStorage.setItem("products", JSON.stringify(newProducts));
    console.log("eliminado Productos restantes:", newProducts.length);
}

const getProducts = () => {
    const products = JSON.parse(localStorage.getItem("products"));
    console.log("productos del localStorage Total:", products ? products.length : 0);
    return products;
}
const newProduct = {
    id: 21,
    title: "Tv",
    price: 99.99,
    category: "electronics"
};
addProduct(newProduct);
editProduct(21, { id: 21, title: "TV panasonic", price: 199.99, category: "electronics" });
// deleteProduct(21);
getProducts();