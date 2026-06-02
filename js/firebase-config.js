// Firebase Configuration
// Project: monitoring-92e1e
// PENTING: Jangan commit file ini ke repository publik.
// Gunakan Firebase Security Rules untuk membatasi akses data.

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCjjKSE2M5F38IahDxTdS1w0i6D9FhxYjQ",
  authDomain: "monitoring-iot-ujikom-b7cd7.firebaseapp.com",
  databaseURL: "https://monitoring-iot-ujikom-b7cd7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "monitoring-iot-ujikom-b7cd7",
  storageBucket: "monitoring-iot-ujikom-b7cd7.firebasestorage.app",
  messagingSenderId: "664205389856",
  appId: "1:664205389856:web:3610e06a392089f2e48c45",
  measurementId: "G-FD8K9HDCNN"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app);
export default app;
