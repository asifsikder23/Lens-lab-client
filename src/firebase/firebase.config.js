// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDECfUo6xGdJC0n-ePqvZ9OPAqvOr2vfnE",
  authDomain: "lab-lens.firebaseapp.com",
  projectId: "lab-lens",
  storageBucket: "lab-lens.appspot.com",
  messagingSenderId: "248004557187",
  appId: "1:248004557187:web:74c2ff3ee2a5e30244deb6"
};

console.log(firebaseConfig);
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;