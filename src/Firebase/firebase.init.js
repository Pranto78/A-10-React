// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkIobYEe2OF4Ku7Kzg52cT3fXeuEjc3yI",
  authDomain: "a-10-auth.firebaseapp.com",
  projectId: "a-10-auth",
  storageBucket: "a-10-auth.firebasestorage.app",
  messagingSenderId: "494942276129",
  appId: "1:494942276129:web:8f178d0d8f67f067093160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
