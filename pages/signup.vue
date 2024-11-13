<template>
  <div class="flex items-center justify-center min-h-screen bg-black bg-opacity-95">
    <div class="p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Heading -->
      <h2 class="text-2xl font-semibold text-center text-white mb-6">
        Let's get you started with a simple registration
      </h2>

      <!-- Registration Form -->
      <form @submit.prevent="handleSubmit">
        <!-- Email Input -->
        <div class="relative mb-4">
  <!-- Input Field -->
  <input
    id="email"
    type="email"
    v-model="email"
    placeholder="Email"
    class="w-full pl-10 pr-4 py-2 mt-2 border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-saukiBlue placeholder-bold placeholder-gray-500 focus:border-saukiBlue"
    required
  />
  
  <!-- Email SVG Icon positioned inside the input on the left -->
  <svg xmlns="http://www.w3.org/2000/svg" class="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
  <path fill-rule="evenodd" d="M2.25 4.5A1.75 1.75 0 014 2.75h16a1.75 1.75 0 011.75 1.75v16a1.75 1.75 0 01-1.75 1.75H4a1.75 1.75 0 01-1.75-1.75v-16zm1.5 1.5v13h16v-13H3.75zM12 13.5l8.25-5.25H3.75L12 13.5z" clip-rule="evenodd" />
</svg>
</div>


        <!-- Password Input with Toggle -->
        <div class="relative mb-4">
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

        <!-- Confirm Password Input -->
        <div class="relative mb-6">
          <i class="fas fa-lock absolute left-3 top-3 text-gray-400"></i>
          <input
            :type="showConfirmPassword ? 'text' : 'password'"
            v-model="confirmPassword"
            placeholder="Confirm password"
            class="w-full pl-10 px-4 py-2 mt-2 border-2 border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-saukiBlue placeholder-bold placeholder-gray-500 focus:border-saukiBlue"
            required
          />
          <i
            @click="toggleConfirmPassword"
            :class="showConfirmPassword ? 'fas fa-eye-slash' : 'fas fa-eye'"
            class="absolute right-3 top-3 text-gray-400 cursor-pointer"
          ></i>
        </div>

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

      <!-- Already have an account? Log In Link -->
      <p class="text-sm text-gray-600 mt-4">
        Already have an account?
        <nuxt-link to="/login" class="text-yellow-500 hover:text-yellow-500 font-semibold">Log In</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)

const handleSubmit = () => {
  // Handle the form submission (e.g., API call to register the user)
  console.log('Form submitted:', { email: email.value, password: password.value, confirmPassword: confirmPassword.value })
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}
</script>

<style scoped>
/* Glowing border effect on focus */
input:focus {
  box-shadow: 0 0 10px rgba(66, 153, 225, 1); /* Blue glow */
  border-color: #4299e1; /* Blue border on focus */
}
</style>
