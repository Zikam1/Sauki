<template>
  <div class="flex items-center justify-center min-h-screen bg-black bg-opacity-96">
    <div class="p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Heading -->
      <h2 class="text-2xl font-semibold text-center text-white mb-6">
        Let's get you started with a simple registration
      </h2>

      <!-- Registration Form -->
      <form @submit.prevent="handleSubmit">
        <input
          v-model="email"
          type="email"
          placeholder="Email"
          required
          class="mb-4 p-2 w-full rounded"
        />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
          class="mb-4 p-2 w-full rounded"
        />
        <input
          v-model="confirmPassword"
          type="password"
          placeholder="Confirm Password"
          required
          class="mb-4 p-2 w-full rounded"
        />

        <!-- Create Account Button -->
        <div class="pb-5 mb-4">
          <button
            type="submit"
            class="w-full py-2 bg-saukiBlue text-white font-semibold rounded-lg shadow-md hover:bg-saukiBlue focus:outline-none focus:ring-2 focus:bg-saukiBlue"
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
import { signInWithGoogle } from '~/firebase'; // Firebase Google sign-in function
import { useRouter } from 'vue-router'; // Vue router for navigation
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '~/firebase'; // Import auth initialization

const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const router = useRouter(); // Initialize router for navigation

// Handle form submission for email registration
const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match!');
    return;
  }

  if (!email.value || !password.value || !confirmPassword.value) {
    alert('All fields are required.');
    return;
  }

  try {
    // Sign up user with Firebase
    await createUserWithEmailAndPassword(auth, email.value, password.value);
    console.log('User signed up:', email.value);
    
    // Redirect after successful registration
    router.push('/login');
  } catch (error) {
    console.error('Registration Error:', error);
    alert('Error during registration. Please try again.');
  }
};

// Google Sign-In Handler (Triggers Google login flow to let the user pick another account)
const signInWithGoogleHandler = async () => {
  try {
    const user = await signInWithGoogle(); // This will trigger the Google sign-in process
    console.log('Google Sign-In successful:', user);

    if (user) {
      router.push('/brief-generator'); // Redirect after successful login
    } else {
      console.error('No user data returned from Google sign-in');
    }
  } catch (error) {
    console.error('Google Sign-In Error:', error);
    alert('Google sign-in failed. Please try again.');
  }
};
</script>
