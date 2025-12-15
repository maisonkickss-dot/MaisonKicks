import { auth } from "./firebase.js";

import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

// Google Provider
const googleProvider = new GoogleAuthProvider();

// GOOGLE LOGIN
document.getElementById("googleLogin")?.addEventListener("click", async () => {
  try {
    await signInWithPopup(auth, googleProvider);
    cerrarModalLogin();
  } catch (error) {
    alert(error.message);
  }
});

// EMAIL LOGIN / REGISTRO AUTOMÁTICO
document.getElementById("emailForm")?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    await signInWithEmailAndPassword(auth, email, password);
    cerrarModalLogin();
  } catch (error) {
    if (error.code === "auth/user-not-found") {
      await createUserWithEmailAndPassword(auth, email, password);
      cerrarModalLogin();
    } else {
      alert(error.message);
    }
  }
});

// ESTADO DE SESIÓN
onAuthStateChanged(auth, (user) => {
  if (user) {
    const btn = document.getElementById("loginBtn");
    if (btn) btn.textContent = "Mi cuenta";
  }
});

// CERRAR MODAL
window.cerrarModalLogin = () => {
  document.getElementById("loginModal").classList.remove("active");
};
