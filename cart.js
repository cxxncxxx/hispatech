<script>
  let cart = [];

  function addToCart(brand, name, price) {
    const existing = cart.find(item => item.name === name);

    if (existing) {
      existing.qty++;
    } else {
      cart.push({
        brand,
        name,
        price,
        qty: 1
      });
    }

    updateCart();
    animateCart();
  }

  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
  }

  function changeQty(index, amount) {
    cart[index].qty += amount;

    if (cart[index].qty <= 0) {
      removeFromCart(index);
    }

    updateCart();
  }

  function clearCart() {
    cart = [];
    updateCart();
  }

  function updateCart() {
    const cartItems = document.getElementById("cartItems");
    const cartCount = document.getElementById("cartCount");
    const cartTotal = document.getElementById("cartTotal");

    cartItems.innerHTML = "";
    let total = 0;
    let totalQty = 0;

    cart.forEach((item, index) => {
      total += item.price * item.qty;
      totalQty += item.qty;

      cartItems.innerHTML += `
        <div class="cart-item">
          <div>
            <strong>${item.name}</strong><br>
            € ${item.price} EUR
          </div>

          <div>
            <button onclick="changeQty(${index}, -1)">➖</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${index}, 1)">➕</button>
            <span class="remove" onclick="removeFromCart(${index})">❌</span>
          </div>
        </div>
      `;
    });

    cartCount.textContent = totalQty;
    cartTotal.textContent = total;
  }

  function toggleCart() {
    const panel = document.getElementById("cartPanel");
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  }

  function animateCart() {
    const icon = document.getElementById("cartIcon");
    icon.classList.add("shake");
    setTimeout(() => icon.classList.remove("shake"), 300);
  }

  function checkout() {
    document.getElementById("orderSection").style.display = "block";
    document.getElementById("orderSection").scrollIntoView({ behavior: "smooth" });
  }
</script>
