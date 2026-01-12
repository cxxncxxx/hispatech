const products = {
  Xiaomi: [
    {
      name: "Xiaomi Redmi Note 14 Pro Plus 5G 256GB 8GB RAM",
      price: 300,
      image: "https://ae-pic-a1.aliexpress-media.com/kf/E55d3033b636647cfb6425fd02bbf8218X.jpg_220x220q75.jpg_.avif"
    },
    {
      name: "Xiaomi POCO X7 Pro 512GB 12GB RAM",
      price: 330,
      image: "https://ae-pic-a1.aliexpress-media.com/kf/Sb349c90caca24f278113e1fa3724afddV.jpg_220x220q75.jpg_.avif"
    },
    {
      name: "Xiaomi POCO C85 256GB 8GB RAM",
      price: 110,
      image: "https://imgs.search.brave.com/VQAl4ZRKPJYwIX6aaTrUL7gHPxKAl-JlIt15d2CbVWc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d2lyZWxlc3NwbGFj/ZS5jb20vY2RuL3No/b3AvZmlsZXMvMl9l/OWMzOWQ5YS05MDRl/LTRhNzQtYmRmOC1i/OWIzZDUzNDU3ZmJf/NzAweDcwMC5wbmc_/dj0xNzU4ODM1ODYy"
    },
    {
      name: "Xiaomi Redmi Note 14 Pro 5G 256GB 8GB RAM",
      price: 250,
      image: "https://ae-pic-a1.aliexpress-media.com/kf/Sa98a9e1014cb40018036fe7566947e198.png_220x220.png_.avif"
    }
  ],

  Samsung: [
    {
      name: "Samsung Galaxy A56 5G 256GB 8GB RAM",
      price: 390,
      image: "https://ae-pic-a1.aliexpress-media.com/kf/E810419646ec2469b8156a0f4280b14edT.png_220x220.png_.avif"
    },
    {
      name: "Samsung Galaxy S25 Ultra 256GB 12GB RAM",
      price: 1200,
      image: "https://ae-pic-a1.aliexpress-media.com/kf/E8ac20bd556134f9795116bed4a80473dp.jpg_220x220q75.jpg_.avif"
    }
  ],

  Apple: [
    {
      name: "iPhone 15 Pro 256GB 8GB RAM Dual eSIM",
      price: 730,
      image: "https://ae-pic-a1.aliexpress-media.com/kf/S57b1525a768f44578809b93bcffd5060b.jpg_220x220q75.jpg_.avif"
    },
    {
      name: "iPhone 12 Pro 128GB 6GB RAM",
      price: 350,
      image: "https://ae-pic-a1.aliexpress-media.com/kf/S7ed7f8abfb874ba991b6476411cdbd69i.jpg_220x220q75.jpg_.avif"
    },
    {
      name: "iPhone 14 Pro 256GB 6GB RAM",
      price: 660,
      image: "https://ae-pic-a1.aliexpress-media.com/kf/S3126c0a24d2e4acb89a8bce298f907e2E.jpg_220x220q75.jpg_.avif"
    }
  ]
};

function renderProducts(brand, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  products[brand].forEach(product => {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p class="price">€${product.price}</p>
      <button onclick="buyProduct('${brand}', '${product.name}', ${product.price})">
        Comprar
      </button>
    `;

    container.appendChild(card);
  });
}

// Render por marcas
renderProducts("Xiaomi", "xiaomiProducts");
renderProducts("Samsung", "samsungProducts");
renderProducts("Apple", "appleProducts");

// Conectar con formulario
window.buyProduct = (brand, name, price) => {
  document.getElementById("productBrand").value = brand;
  document.getElementById("productName").value = name;
  document.getElementById("price").value = price;

  document.getElementById("orderSection").style.display = "block";
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};
