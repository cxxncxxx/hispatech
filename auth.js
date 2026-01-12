// auth.js
import { signInWithEmailAndPassword } 
from "https://www.gstatic.com/firebasejs/12.7.0/firebase-auth.js";

import { auth } from "./firebase.js";

const ADMIN_EMAIL = "hispatechesp@gmail.com";

const loginBtn = document.getElementById("loginBtn");
const errorMsg = document.getElementById("loginError");

loginBtn.addEventListener("click", async () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    if (email === ADMIN_EMAIL) {
      window.location.href = "admin.html";
    } else {
      window.location.href = "index.html";
    }

  } catch (error) {
    errorMsg.innerText = "Email o contraseña incorrectos";
  }
});
