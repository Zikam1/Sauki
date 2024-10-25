<template>
  <header class="bg-gray-900 text-white shadow-lg">
    <div class="container mx-auto px-12 py-4 md:px-36 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center">
        <!-- <img src="/ai-logo.svg" alt="AI Logo" class="h-12 w-12 mr-3" /> -->
        <span class="text-2xl font-semibold">Sauki</span>
      </div>

      
      
        <!-- Navigation Links -->
        <nav class="hidden md:flex space-x-6 ml-6">
          <nuxt-link to="/" class="hover:text-gray-400">Home</nuxt-link>
          <nuxt-link to="/brief" class="hover:text-gray-400">Brief Generator</nuxt-link>
          <nuxt-link to="/faq" class="hover:text-gray-400">FAQ</nuxt-link>
        </nav>
        <!-- Login and Signup Buttons -->
        <div class="flex items-center space-x-4">
        <nuxt-link to="/login" class="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg">
          Login
        </nuxt-link>
        <nuxt-link to="/signup" class="bg-yellow-500 hover:bg-yellow-400 px-4 py-2 rounded-lg">
          Signup
        </nuxt-link>

      </div>

      <!-- Mobile Menu Button -->
      <button @click="toggleMenu" class="md:hidden text-gray-300 hover:text-gray-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
        </svg>
      </button>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="menuOpen" class="md:hidden bg-gray-800 text-white">
      <ul class="space-y-4 py-4 px-6">
        <li><nuxt-link to="/" class="hover:text-gray-400">Home</nuxt-link></li>
        <li><nuxt-link to="/brief" class="hover:text-gray-400">Brief Generator</nuxt-link></li>
        <li><nuxt-link to="/faq" class="hover:text-gray-400">FAQ</nuxt-link></li>
        <li><nuxt-link to="/login" class="hover:text-gray-400">Login</nuxt-link></li>
        <li><nuxt-link to="/signup" class="hover:text-gray-400">Signup</nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
header {
  transition: background-color 0.3s;
}
</style>
