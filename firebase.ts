import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, type User } from 'firebase/auth'

// Firebase configuration (replace these with your Firebase project settings)
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
const app = initializeApp(firebaseConfig)
const auth = getAuth(app)

// Google Sign-In function
export const signInWithGoogle = async (): Promise<User | null> => {
  const provider = new GoogleAuthProvider()
  try {
    const result = await signInWithPopup(auth, provider)
    return result.user // Contains user details
  } catch (error) {
    console.error("Google Sign-In Error:", error)
    return null
  }
}

// Logout function
export const signOutUser = async (): Promise<void> => {
  try {
    await signOut(auth)
    console.log('User signed out')
  } catch (error) {
    console.error('Error signing out:', error)
  }
}

export { auth }
