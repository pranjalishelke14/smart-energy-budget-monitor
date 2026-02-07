import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Added GoogleAuthProvider
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database"; // Added for Realtime Monitoring

const firebaseConfig = {
  apiKey: "AIzaSyCZSt4kInKY-wB17ZKM1h3BA_6_HtXuC5M",
  authDomain: "smart-energy-budget-monitor.firebaseapp.com",
  projectId: "smart-energy-budget-monitor",
  storageBucket: "smart-energy-budget-monitor.firebasestorage.app",
  messagingSenderId: "184057526269",
  appId: "1:184057526269:web:bae77fcbf3602ecc498b94",
  measurementId: "G-HN536CYDP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const database = getDatabase(app); // For ESP32 Real-time data
export const googleProvider = new GoogleAuthProvider(); // For Google Login button

export default app;