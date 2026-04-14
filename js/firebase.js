// 🔥 IMPORTACIONES CORRECTAS (Firestore)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

// 🔥 CONFIGURACIÓN DE TU PROYECTO (YA ES TUYA)
const firebaseConfig = {
  apiKey: "AIzaSyAkI9uMhGrgOJFO3o3cL2YEfk6uAwyMdUE",
  authDomain: "ta-lab-challenge.firebaseapp.com",
  projectId: "ta-lab-challenge",
  storageBucket: "ta-lab-challenge.firebasestorage.app",
  messagingSenderId: "692777090511",
  appId: "1:692777090511:web:d76dc230e95ff7e95fa6ba"
};

// 🔥 INICIALIZAR FIREBASE
const app = initializeApp(firebaseConfig);

// 🔥 INICIALIZAR FIRESTORE (NO Realtime Database)
const db = getFirestore(app);

// 🔥 FUNCIÓN PARA GUARDAR RESULTADOS
export async function guardarResultado(nombre, grupo, puntaje) {
  try {
    await addDoc(collection(db, "resultados"), {
      nombre: nombre,
      grupo: grupo,
      puntaje: puntaje,
      fecha: new Date()
    });

    console.log("✅ Resultado guardado en Firestore");
  } catch (error) {
    console.error("❌ Error al guardar:", error);
  }
}