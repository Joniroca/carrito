import { getProducts } from './crud.js';

getProducts();

function printProducts (products) {
    // Identificar el contenedor.

    const container = document.getElementById('product-container');

    // Generar el HTML

    let html = '';
    for(let i = 0; i < products.length; i++) {
        html += `<div class="col-md-6 col-lg-4 mt-3 bg-card">
        <div class="card">
            <div class="card-body">
                <h6 class="card-title">${products[i].name}</h6>
                <p class="card-text h5 text-right mt-3">$ ${products[i].price.toFixed(2)} </p>
                <input class="btn btn-danger" type="submit" value="Agregar" onclick="addProduct(${products[i].id})">
            </div>  
        </div>
    </div>`
    }
    container.innerHTML = html;
}