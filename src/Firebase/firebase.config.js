// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_apiKey, 
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.VITE_storageBucket,
  messagingSenderId: "790565035697",
  appId: "1:790565035697:web:76490c7744671630ab0c90"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app