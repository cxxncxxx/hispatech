const products = {
  Apple: [
    {
      name: "iPhone 15 Pro 256GB",
      price: 730,
      image: "https://link-de-tu-imagen.jpg"
    },
    {
      name: "iPhone 14 128GB",
      price: 620,
      image: "https://link-de-tu-imagen.jpg"
    }
  ],

  Samsung: [
    {
      name: "Samsung S23 Ultra",
      price: 690,
      image: "https://link-de-tu-imagen.jpg"
    }
  ],

  Xiaomi: [
    {
      name: "Xiaomi Redmi Note 13",
      price: 240,
      image: "https://link-de-tu-imagen.jpg"
    }
  ]
};

function renderProducts(brand, containerId) {
  const container = document.getElementById(containerId);

  products[brand].forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}">
      <h3>${product.name}</h3>
      <p>€${product.price}</p>
      <button onclick="buyProduct('${brand}', '${product.name}', ${product.price})">
        Comprar
      </button>
    `;

    container.appendChild(card);
  });
}

renderProducts("Apple", "appleProducts");
renderProducts("Samsung", "samsungProducts");
renderProducts("Xiaomi", "xiaomiProducts");
