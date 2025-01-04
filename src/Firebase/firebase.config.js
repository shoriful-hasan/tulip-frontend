// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyApDuHuHQv5YpUqLFr4vewkK9v1OQOwvnE",
  authDomain: "tulip-auth-dae84.firebaseapp.com",
  projectId: "tulip-auth-dae84",
  storageBucket: "tulip-auth-dae84.firebasestorage.app",
  messagingSenderId: "790565035697",
  appId: "1:790565035697:web:76490c7744671630ab0c90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app