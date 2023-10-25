// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_ggoOuDO0QGWKKgo8R6jjGyLNljdJyJ0",
  authDomain: "photo-gallery-381602.firebaseapp.com",
  projectId: "photo-gallery-381602",
  storageBucket: "photo-gallery-381602.appspot.com",
  messagingSenderId: "225968418582",
  appId: "1:225968418582:web:740abeca3d9a03f13a6a37",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);
const db = getFirestore(app);
export { auth, storage, db };
