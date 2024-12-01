// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1eDHKutDEUtyJI6jhms1otAjWzv0AyKg",
  authDomain: "coffee-store-be640.firebaseapp.com",
  projectId: "coffee-store-be640",
  storageBucket: "coffee-store-be640.firebasestorage.app",
  messagingSenderId: "609677874951",
  appId: "1:609677874951:web:c62d2e7e2214f85ec557a2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);