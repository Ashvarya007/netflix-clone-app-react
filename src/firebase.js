// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANOGBi5JSrqddCQaEuSa7nAfV_GY-rx6s",
  authDomain: "netflix-react-clone-34950.firebaseapp.com",
  projectId: "netflix-react-clone-34950",
  storageBucket: "netflix-react-clone-34950.appspot.com",
  messagingSenderId: "802448254151",
  appId: "1:802448254151:web:a5ec5c28f44912d3828ae2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
