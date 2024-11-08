<template>
  <div class="flex items-center justify-center min-h-screen bg-black">
    <div class="p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Heading -->
      <h2 class="text-3xl font-semibold text-white mb-4">
  Let's <span class="text-saukiBlue">simplify!</span>
</h2>
      <h2 class="text-sm font-semibold  text-gray-500 mb-6">
        Log in to Sauki and Simplify!
      </h2>

      <!-- Login Form -->
      <form @submit.prevent="handleSubmit">
        <!-- Email Input -->
        <div class="relative mb-4">
          <i class="fas fa-envelope absolute left-3 top-3 text-gray-400"></i>
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
          <i class="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
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
            class="absolute right-3 top-3 text-gray-400 cursor-pointer"
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
        <nuxt-link to="/register" class="text-yellow-500 hover:text-yellow-600 font-semibold">Sign Up</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const rememberMe = ref(false)
const showPassword = ref(false)

const handleSubmit = () => {
  // Handle the form submission (e.g., API call to log in the user)
  console.log('Form submitted:', { email: email.value, password: password.value, rememberMe: rememberMe.value })
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
