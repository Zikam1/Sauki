<template>
  <div class="flex items-center justify-center min-h-screen bg-black bg-opacity-96">
    <div class="p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Heading -->
      <h2 class="text-3xl font-semibold text-white mb-4">
        Let's <span class="text-saukiBlue">simplify!</span>
      </h2>
      <h2 class="text-sm font-semibold text-gray-500 mb-6">
        Log in to Sauki and Simplify!
      </h2>

      <!-- Login Form -->
      <form @submit.prevent="handleSubmit">
        <!-- Email Input -->
        <div class="relative mb-4">
          <i class="fas fa-envelope absolute left-3 top-5 text-gray-400"></i>
          <input
            id="email"
            type="email"
            v-model="email"
            placeholder="Email"
            class="w-full pl-10 px-4 py-2 mt-2 border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-saukiBlue placeholder-bold placeholder-gray-500 focus:border-saukiBlue"
            required
          />
        </div>

        <!-- Password Input with Toggle -->
        <div class="relative mb-6">
          <i class="fas fa-lock absolute left-3 top-5 text-gray-400"></i>
          <input
            :type="showPassword ? 'text' : 'password'"
            v-model="password"
            placeholder="Password"
            class="w-full pl-10 px-4 py-2 mt-2 border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-saukiBlue placeholder-bold placeholder-gray-500 focus:border-saukiBlue"
            required
          />
          <i
            @click="togglePassword"
            :class="showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
            class="absolute right-3 top-5 text-gray-400 cursor-pointer"
          ></i>
        </div>

        <!-- Remember Me and Forgot Password -->
        <div class="flex items-center justify-between mb-4">
          <label class="inline-flex items-center text-gray-400">
            <input
              type="checkbox"
              v-model="rememberMe"
              class="form-checkbox h-4 w-4 text-saukiBlue border-gray-300 rounded focus:outline-none"
            />
            <span class="ml-2">Remember me</span>
          </label>
          <nuxt-link to="/forgot-password" class="text-yellow-500 hover:text-yellow-600 font-semibold">
            Forgot Password?
          </nuxt-link>
        </div>

        <!-- Log In Button -->
        <div class="pb-5 mb-4">
          <button
            type="submit"
            class="w-full py-2 bg-saukiBlue text-white font-semibold rounded-lg shadow-md hover:bg-saukiBlue focus:outline-none focus:ring-2 focus:bg-saukiBlue"
          >
            Log In
          </button>
        </div>
      </form>

      <!-- Sign Up Link -->
      <p class="text-sm text-gray-600 mt-4">
        Don't have an account?
        <nuxt-link to="/signup" class="text-yellow-500 hover:text-yellow-600 font-semibold">Sign Up</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '@/firebase'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

const router = useRouter()

const handleSubmit = async () => {
  const isValidEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)
  if (!isValidEmail) {
    alert('Please enter a valid email address.')
    return
  }

  if (!email.value || !password.value) {
    alert('Please enter both email and password.')
    return
  }

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value)
    console.log('User logged in:', userCredential.user)
    router.push('/brief-generator')
  } catch (error) {
    // Log the error for debugging purposes
    console.error('Login failed:', error)

    // Display error message to user
    let errorMessage = 'Login failed. Please try again.'
    
    if (error.code === 'auth/invalid-email') {
      errorMessage = 'Invalid email format. Please check your email address.'
    } else if (error.code === 'auth/wrong-password') {
      errorMessage = 'Incorrect password. Please try again.'
    } else if (error.code === 'auth/user-not-found') {
      errorMessage = 'No user found with this email address.'
    } else if (error.code === 'auth/invalid-credential') {
      errorMessage = 'The credentials provided are invalid. Please check your login details.'
    }

    alert(errorMessage)
  }
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}
</script>

<style scoped>
/* Glowing border effect on focus */
input:focus {
  box-shadow: 0 0 10px rgba(66, 153, 225, 1); /* Blue glow */
  border-color: #4299e1; /* Blue border on focus */
}
</style>
