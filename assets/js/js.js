import { getProducts, addProduct, deleteTask } from './crud.js';

getProducts();

window.addProduct = addProduct
window.deleteTask = deleteTask


const button = document.querySelector("#pills-profile-tab")
const navMenu = document.querySelector(".table-sm")

button.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
});


// Guardar elementos en el local storage:
//localStorage.setItem("name", "Alejandro")
//localStorage.setItem("lastname", "Betancur")

// Obtener un valor del LocalStorage
//console.log( localStorage.getItem("name") );

// Eliminar un valor del Local Storage
//localStorage.removeItem("lastname")

// Limpiar todas las claves del Local Storage
//localStorage.clear()

//const user = { name: "Pepito" }

// Convertir el objeto a string para poder guardarlo.
//localStorage.setItem("user", JSON.stringify(user))

//const userFromLocalStorage = localStorage.getItem("user")

//console.log(userFromLocalStorage)

//console.log(JSON.parse(userFromLocalStorage))