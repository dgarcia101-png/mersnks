document.addEventListener("DOMContentLoaded", () => {
    const catalogoContainer = document.getElementById("catalogo-productos");

    // API gratuita de productos (Fake Store API)
    const API_URL = "https://fakestoreapi.com/products?limit=4";

    // Cargar productos desde API
    fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            catalogoContainer.innerHTML += `
                <div class="row">
                    ${data.map(producto => `
                        <div class="col-md-6 col-lg-3 mb-4">
                            <div class="card h-100 shadow-sm">
                                <img src="${producto.image}" class="card-img-top" alt="${producto.title}" style="height:200px; object-fit:contain;">
                                <div class="card-body d-flex flex-column">
                                    <h5 class="card-title">${producto.title}</h5>
                                    <p class="card-text text-muted">${producto.category}</p>
                                    <p class="fw-bold">$${producto.price} USD</p>
                                    <button class="btn btn-dark mt-auto">Agregar al carrito</button>
                                </div>
                            </div>
                        </div>
                    `).join("")}
                </div>
            `;
        })
        .catch(err => {
            catalogoContainer.innerHTML += `
                <div class="alert alert-danger mt-3">
                    Error al cargar los productos. Intenta más tarde.
                </div>
            `;
            console.error("Error al cargar API:", err);
        });
});
