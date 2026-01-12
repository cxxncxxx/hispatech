// order.js
import { collection, addDoc, serverTimestamp } 
from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

import { db } from "./firebase.js";

const form = document.getElementById("orderForm");
const msg = document.getElementById("orderMsg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const orderData = {
    name: document.getElementById("name").value,
    dni: document.getElementById("dni").value,
    phone: document.getElementById("phone").value,
    email: document.getElementById("email").value,
    address: document.getElementById("address").value,
    postalCode: document.getElementById("postalCode").value,
    city: document.getElementById("city").value,
    province: document.getElementById("province").value,

    productName: document.getElementById("productName").value,
    productBrand: document.getElementById("productBrand").value,
    price: Number(document.getElementById("price").value),

    status: "Pendiente de pago",
    createdAt: serverTimestamp()
  };

  try {
    await addDoc(collection(db, "orders"), orderData);

    msg.innerText = "Pedido enviado correctamente. Te enviaremos los datos de pago.";
    form.reset();

  } catch (error) {
    msg.innerText = "Error al enviar el pedido. Intentá nuevamente.";
  }
});
