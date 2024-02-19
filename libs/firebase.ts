// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOrkmUfOl29_KZ8zzO24Kmy8MGf1j5BKY",
    authDomain: "ecommerce-girls-bfd31.firebaseapp.com",
    projectId: "ecommerce-girls-bfd31",
    storageBucket: "ecommerce-girls-bfd31.appspot.com",
    messagingSenderId: "516016111306",
    appId: "1:516016111306:web:fdaf028244057900c7fe33"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp