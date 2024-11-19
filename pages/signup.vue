<template>
  <div class="flex items-center justify-center min-h-screen bg-black bg-opacity-96">
    <div class="p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Heading -->
      <h2 class="text-2xl font-semibold text-center text-white mb-6">
        Let's get you started with a simple registration
      </h2>

      <!-- Registration Form -->
      <form @submit.prevent="handleSubmit">
        <!-- Email Input -->
        <div class="relative mb-4">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="fas fa-envelope text-gray-400"></i>
          </span>
          <input
            v-model="email"
            type="email"
            placeholder="Email"
            required
            class="p-2 w-full pl-10 rounded border border-gray-300 focus:ring focus:ring-blue-500"
          />
        </div>

        <!-- Password Input -->
        <div class="relative mb-4">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="fas fa-lock text-gray-400"></i>
          </span>
          <input
            v-model="password"
            type="password"
            placeholder="Password"
            required
            class="p-2 w-full pl-10 rounded border border-gray-300 focus:ring focus:ring-blue-500"
          />
        </div>

        <!-- Confirm Password Input -->
        <div class="relative mb-4">
          <span class="absolute inset-y-0 left-0 flex items-center pl-3">
            <i class="fas fa-lock text-gray-400"></i>
          </span>
          <input
            v-model="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            required
            class="p-2 w-full pl-10 rounded border border-gray-300 focus:ring focus:ring-blue-500"
          />
        </div>

        <!-- Create Account Button -->
        <div class="pb-5 mb-4">
          <button
            type="submit"
            class="w-full py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700"
          >
            Create Account
          </button>
        </div>
      </form>

      <!-- Google Sign-In Button -->
      <button
        @click="signInWithGoogleHandler"
        class="w-full py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 flex items-center justify-center gap-2"
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google Icon"
          class="h-5 w-5"
        />
        Sign in with Google
      </button>

      <!-- Already have an account? Log In Link -->
      <p class="text-sm text-gray-600 mt-4">
        Already have an account?
        <nuxt-link to="/login" class="text-yellow-500 hover:text-yellow-500 font-semibold">Log In</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

// Firebase Initialization
const firebaseConfig = {
  apiKey: "AIzaSyCe-Dzd_1p5XAJuW3N2uENNZh8hw3suJLc",
  authDomain: "saukiai.firebaseapp.com",
  projectId: "saukiai",
  storageBucket: "saukiai.firebasestorage.app",
  messagingSenderId: "631283386456",
  appId: "1:631283386456:web:98df1203284ecdab19a22d",
  measurementId: "G-3JVPEJ826H"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter();

// Handle Form Submission
const handleSubmit = async () => {
  if (!email.value || !password.value || !confirmPassword.value) {
    alert('All fields are required.');
    return;
  }

  if (password.value.length < 6) {
    alert('Password should be at least 6 characters.');
    return;
  }

  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!');
    return;
  }

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log('User registered successfully:', userCredential.user);
    router.push('/login'); // Redirect to login after successful registration
  } catch (error) {
    console.error('Registration Error:', error.message);
    alert(`Error: ${error.message}`);
  }
};

// Handle Google Sign-In
const signInWithGoogleHandler = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    console.log('Google Sign-In successful:', result.user);
    router.push('/brief-generator'); // Redirect after Google login
  } catch (error) {
    console.error('Google Sign-In Error:', error.message);
    alert(`Error: ${error.message}`);
  }
};
</script>

<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css');

/* Add any additional styling here if needed */
</style>
