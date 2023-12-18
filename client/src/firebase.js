// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-c13bb.firebaseapp.com",
  projectId: "mern-auth-c13bb",
  storageBucket: "mern-auth-c13bb.appspot.com",
  messagingSenderId: "151229004707",
  appId: "1:151229004707:web:649740bf7f121ffb0cb816"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);