// admin.js
import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";
import { collection, getDocs, updateDoc, doc } 
from "https://www.gstatic.com/firebasejs/12.7.0/firebase-firestore.js";

import { auth, db } from "./firebase.js";

const ADMIN_EMAIL = "hispatechesp@gmail.com";
const tableBody = document.querySelector("#ordersTable tbody");

// Seguridad: solo admin
onAuthStateChanged(auth, (user) => {
  if (!user || user.email !== ADMIN_EMAIL) {
    window.location.href = "login.html";
  } else {
    loadOrders();
  }
});

async function loadOrders() {
  tableBody.innerHTML = "";

  const querySnapshot = await getDocs(collection(db, "orders"));

  querySnapshot.forEach((docSnap) => {
    const o = docSnap.data();
    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${o.createdAt?.toDate().toLocaleString() || "-"}</td>
      <td>
        ${o.name}<br>
        ${o.email}<br>
        ${o.phone}
      </td>
      <td>${o.productName}</td>
      <td>${o.productBrand}</td>
      <td>€${o.price}</td>
      <td>
        ${o.address}<br>
        ${o.postalCode} ${o.city}<br>
        ${o.province}
      </td>
      <td>
        <select data-id="${docSnap.id}">
          <option ${o.status === "Pendiente de pago" ? "selected" : ""}>Pendiente de pago</option>
          <option ${o.status === "Pago confirmado" ? "selected" : ""}>Pago confirmado</option>
          <option ${o.status === "Enviado" ? "selected" : ""}>Enviado</option>
        </select>
      </td>
    `;

    tableBody.appendChild(tr);
  });

  activateStatusChange();
}

function activateStatusChange() {
  document.querySelectorAll("select").forEach(select => {
    select.addEventListener("change", async (e) => {
      const orderId = e.target.dataset.id;
      const newStatus = e.target.value;

      await updateDoc(doc(db, "orders", orderId), {
        status: newStatus
      });
    });
  });
}
