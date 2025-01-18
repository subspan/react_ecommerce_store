// src/firebase.ts
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, OAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBg2zukMub2v-sYClDi5hzpbN0i3QVdlqY",
  authDomain: "ecommerce-boilerplate-43cf5.firebaseapp.com",
  projectId: "ecommerce-boilerplate-43cf5",
  storageBucket: "ecommerce-boilerplate-43cf5.firebasestorage.app",
  messagingSenderId: "388705315088",
  appId: "1:388705315088:web:50431d8a84673989c3dd95",
  measurementId: "G-5H7F04JPBN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Authentication
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const appleProvider = new OAuthProvider('apple.com'); // For Apple Sign-in

export { auth, googleProvider, appleProvider };