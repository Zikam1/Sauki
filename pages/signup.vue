<template>
  <div class="flex items-center justify-center min-h-screen bg-black bg-opacity-96">
    <div class="p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Heading -->
      <h2 class="text-2xl font-semibold text-center text-white mb-6">
        Let's get you started with a simple registration
      </h2>

      <!-- Registration Form -->
      <form @submit.prevent="handleSubmit">
        <input v-model="email" type="email" placeholder="Email" required class="mb-4 p-2 w-full rounded" />
        <input v-model="password" type="password" placeholder="Password" required class="mb-4 p-2 w-full rounded" />
        <input v-model="confirmPassword" type="password" placeholder="Confirm Password" required class="mb-4 p-2 w-full rounded" />

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
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Icon" class="h-5 w-5" />
        Sign in with Google
      </button>

      <!-- Logout Button -->
      <!-- <button
        @click="logoutUser"
        class="w-full py-2 mt-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 flex items-center justify-center gap-2"
      >
        Log Out
      </button> -->

      <!-- Already have an account? Log In Link -->
      <p class="text-sm text-gray-600 mt-4">
        Already have an account?
        <nuxt-link to="/login" class="text-yellow-500 hover:text-yellow-500 font-semibold">Log In</nuxt-link>
      </p>

      <!-- Register with Another Google Mail Button -->
      <!-- <button
        @click="signInWithGoogleHandler"
        class="w-full py-2 mt-4 bg-yellow-500 text-white font-semibold rounded-lg shadow-md hover:bg-yellow-600"
      >
        Register with Another Google Mail
      </button> -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { signInWithGoogle, signOutUser as firebaseSignOut } from '~/firebase' // Renamed local signOutUser function to avoid conflict
import { useRouter } from 'vue-router' // Import router composable

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const router = useRouter() // Initialize router

// Handle form submission for email registration
const handleSubmit = async () => {
  if (password.value !== confirmPassword.value) {
    alert("Passwords do not match!")
    return
  }
  
  try {
    // Simulate registration process (ideally, use Firebase or another service to register the user)
    console.log('User registered:', { email: email.value, password: password.value })
    
    // After successful registration, redirect to login page
    router.push('/login')
  } catch (error) {
    console.error("Registration Error:", error)
  }
}

// Google Sign-In Handler (Triggers Google login flow to let the user pick another account)
const signInWithGoogleHandler = async () => {
  try {
    const user = await signInWithGoogle() // This will trigger the Google sign-in process
    console.log('Google Sign-In successful:', user)
    
    // After successful Google sign-in, redirect to the desired page
    router.push('/')
  } catch (error) {
    console.error("Google Sign-In Error:", error)
  }
}

// Logout function (renamed to avoid conflict)
const logoutUser = async () => {
  try {
    await firebaseSignOut()
    console.log('User signed out')
    // Redirect to home or login page after sign-out
    router.push('/')
  } catch (error) {
    console.error("Sign-out Error:", error)
  }
}

// Reset the registration form
const resetForm = () => {
  email.value = ''
  password.value = ''
  confirmPassword.value = ''
}
</script>
