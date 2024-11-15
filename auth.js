import { getAuth, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~/firebase'; // Import auth instance

// Sign-in with email and password
const loginUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log('User logged in:', userCredential.user);
    return userCredential.user;
  } catch (error) {
    console.error('Login Error:', error);
    throw error;
  }
};

// Sign-out the user
const logoutUser = async () => {
  try {
    await signOut(auth);
    console.log('User signed out');
    return true;
  } catch (error) {
    console.error('Sign-out Error:', error);
    throw error;
  }
};

export { loginUser, logoutUser };
