// firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase config (replace with your actual Firebase project configuration)
const firebaseConfig = {
  apiKey: "AIzaSyCe-Dzd_1p5XAJuW3N2uENNZh8hw3suJLc",
  authDomain: "saukiai.firebaseapp.com",
  projectId: "saukiai",
  storageBucket: "saukiai.firebasestorage.app",
  messagingSenderId: "631283386456",
  appId: "1:631283386456:web:98df1203284ecdab19a22d",
  measurementId: "G-3JVPEJ826H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Google sign-in function
const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    console.log('Google Sign-In successful:', user);
    return user;
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    throw error;
  }
};

export { auth, signInWithGoogle };

