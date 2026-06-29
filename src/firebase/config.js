// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiXDq6-2haM8bLRaZuMFBs7G86UT9fvdc",
  authDomain: "tp-final-react-a67e9.firebaseapp.com",
  projectId: "tp-final-react-a67e9",
  storageBucket: "tp-final-react-a67e9.firebasestorage.app",
  messagingSenderId: "110446846712",
  appId: "1:110446846712:web:845a38d86e6d2fd37dd10d",
  measurementId: "G-F9GGNL13GZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

//para cuando veamos el login
const auth = getAuth(app);

export { db, auth };
