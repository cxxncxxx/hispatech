const products = {
  Xiaomi: [
    {
      name: "Xiaomi Redmi Note 14 Pro Plus 5G 256GB 8GB RAM",
      price: 300,
      images: [
        "https://ae-pic-a1.aliexpress-media.com/kf/E55d3033b636647cfb6425fd02bbf8218X.jpg_220x220q75.jpg_.avif",
        "https://ae-pic-a1.aliexpress-media.com/kf/E94a7789b006e4a8fbe6eaa300948924bz.jpg_220x220q75.jpg_.avif",
        "https://ae-pic-a1.aliexpress-media.com/kf/E116f27ab98174d9bb64613819a70525dF.png_220x220.png_.avif",
        "https://ae-pic-a1.aliexpress-media.com/kf/E33893214780b478eb24d18c162211f519.jpg_220x220q75.jpg_.avif"
      ]
    },
    {
      name: "Xiaomi POCO X7 Pro 512GB 12GB RAM",
      price: 330,
      images: [
        "https://ae-pic-a1.aliexpress-media.com/kf/Sb349c90caca24f278113e1fa3724afddV.jpg_220x220q75.jpg_.avif",
        "https://ae-pic-a1.aliexpress-media.com/kf/S6d16fe792bb047bfb3352db325cc42d73.jpg_220x220q75.jpg_.avif",
        "https://ae-pic-a1.aliexpress-media.com/kf/S68d3323ee96549e1b134cb0e7671c3234.jpg_220x220q75.jpg_.avif",
        "https://ae-pic-a1.aliexpress-media.com/kf/S648bbffb285b46dbb1161bf9e863b0d6P.jpg_220x220q75.jpg_.avif"
      ]
    }
  ],

  Samsung: [
    {
      name: "Samsung Galaxy S25 Ultra 256GB 12GB RAM",
      price: 1200,
      images: [
        "https://ae-pic-a1.aliexpress-media.com/kf/E8ac20bd556134f9795116bed4a80473dp.jpg_220x220q75.jpg_.avif",
        "https://ae-pic-a1.aliexpress-media.com/kf/E3fcb3083283342e9a87f7a54bb0389071.jpg_220x220q75.jpg_.avif",
        "https://ae-pic-a1.aliexpress-media.com/kf/Ebe97124dcfe64775bceb14a426205950d.jpg_220x220q75.jpg_.avif"
      ]
    }
  ],

  Apple: [
    {
      name: "iPhone 15 Pro 256GB 8GB RAM Dual eSIM",
      price: 730,
      images: [
        "https://ae-pic-a1.aliexpress-media.com/kf/S57b1525a768f44578809b93bcffd5060b.jpg_220x220q75.jpg_.avif",
        "https://ae-pic-a1.aliexpress-media.com/kf/Sf29f6954e245410aa2222f8812666e2fd.jpg_220x220q75.jpg_.avif",
        "https://ae-pic-a1.aliexpress-media.com/kf/S8d7032d9b7104936a23771e727400081Z.jpg_220x220q75.jpg_.avif"
      ]
    }
  ]
};

function renderProducts(brand, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  products[brand].forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";

    const mainImgId = `${brand}-${index}-main`;

    card.innerHTML = `
      <img id="${mainImgId}" src="${product.images[0]}" class="main-img">

      <div class="thumbs">
        ${product.images
          .map(
            img =>
              `<img src="${img}" onclick="changeImage('${mainImgId}', '${img}')">`
          )
          .join("")}
      </div>

      <h3>${product.name}</h3>
      <p class="price">€${product.price}</p>
      <button onclick="buyProduct('${brand}', '${product.name}', ${product.price})">
        Comprar
      </button>
    `;

    container.appendChild(card);
  });
}

window.changeImage = (id, src) => {
  document.getElementById(id).src = src;
};

renderProducts("Xiaomi", "xiaomiProducts");
renderProducts("Samsung", "samsungProducts");
renderProducts("Apple", "appleProducts");

window.buyProduct = (brand, name, price) => {
  document.getElementById("productBrand").value = brand;
  document.getElementById("productName").value = name;
  document.getElementById("price").value = price;

  document.getElementById("orderSection").style.display = "block";
  window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
};
