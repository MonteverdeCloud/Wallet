// firebase-init.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

// Configuración
const firebaseConfig = {
  apiKey: "AIzaSyDIev1SLtwZ77VMBKEJ0nUS4SpG1rWTMLw",
  authDomain: "mywallet-d15cb.firebaseapp.com",
  projectId: "mywallet-d15cb",
  storageBucket: "mywallet-d15cb.firebasestorage.app",
  messagingSenderId: "17630130164",
  appId: "1:17630130164:web:a34af64bc3cce2217953a1",
  measurementId: "G-6JE1XM8YWK"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Exportar servicios para usarlos en cualquier página
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
