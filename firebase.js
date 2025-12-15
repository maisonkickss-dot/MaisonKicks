// firebase.js (VERSIÓN CORRECTA PARA HTML PURO)
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCwCZzDpGCJxhLWRuYUEbCKP5uxmzfT3E8",
  authDomain: "maison-kicks.firebaseapp.com",
  projectId: "maison-kicks",
  storageBucket: "maison-kicks.firebasestorage.app",
  messagingSenderId: "349190759714",
  appId: "1:349190759714:web:35ca259ccc68f80ca4717b"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
