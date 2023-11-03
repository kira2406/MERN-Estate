// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-estate-569f0.firebaseapp.com",
    projectId: "mern-estate-569f0",
    storageBucket: "mern-estate-569f0.appspot.com",
    messagingSenderId: "176268888889",
    appId: "1:176268888889:web:ad342ce0da164ebab1f6e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
