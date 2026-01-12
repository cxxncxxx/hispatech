// cliente.js
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { collection, query, where, getDocs } 
from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

import { auth, db } from "./firebase.js";

const ordersDiv = document.getElementById("orders");
const IBAN = "TU_IBAN_AQUI"; // ← después lo pegamos bien

document.getElementById("iban").innerText = IBAN;

onAuthStateChanged(auth, async (user) => {
  if (!user) {
    window.location.href = "login.html";
    return;
  }

  const q = query(
    collection(db, "orders"),
    where("email", "==", user.email)
  );

  const querySnapshot = await getDocs(q);

  if (querySnapshot.empty) {
    ordersDiv.innerHTML = "<p>No tenés pedidos aún.</p>";
    return;
  }

  querySnapshot.forEach((doc) => {
    const o = doc.data();

    const card = document.createElement("div");
    card.className = "order-card";

    card.innerHTML = `
      <h3>${o.productBrand} – ${o.productName}</h3>
      <p><strong>Precio:</strong> €${o.price}</p>
      <p><strong>Estado:</strong> ${o.status}</p>
    `;

    ordersDiv.appendChild(card);
  });
});
