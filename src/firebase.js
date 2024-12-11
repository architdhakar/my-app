// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKF6WEjm8EtrCPD9f2x893dwWacSH5kDM",
  authDomain: "myquery-cd173.firebaseapp.com",
  projectId: "myquery-cd173",
  storageBucket: "myquery-cd173.firebasestorage.app",
  messagingSenderId: "799969781417",
  appId: "1:799969781417:web:bfe987133c78eff9c9abb8",
  measurementId: "G-2XPP4CL90C"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);