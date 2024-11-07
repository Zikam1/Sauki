<template>
  <header class="bg-red-500 text-white shadow-lg">
    <div class="container mx-auto px-12 py-4 md:px-36 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center">
  <nuxt-link to="/">
    <img src="/assets/sauki-logo.png" alt="Sauki Logo" class="h-10 w-auto" />
  </nuxt-link>
</div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex space-x-6 ml-6">
        <nuxt-link to="/" class="hover:text-gray-400">Home</nuxt-link>
        <nuxt-link to="/brief" class="hover:text-gray-400">Brief Generator</nuxt-link>
        <nuxt-link to="/faq" class="hover:text-gray-400">FAQ</nuxt-link>
      </nav>

      <!-- Login and Signup Buttons (Hidden on Mobile) -->
      <div class="hidden md:flex items-center space-x-4">
        <nuxt-link to="/login" class="bg-blue-500 hover:bg-blue-500 px-4 py-2 rounded-lg">
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
        <li><nuxt-link to="/" @click="closeMenu" class="hover:text-gray-400">Home</nuxt-link></li>
        <li><nuxt-link to="/brief" @click="closeMenu" class="hover:text-gray-400">Brief Generator</nuxt-link></li>
        <li><nuxt-link to="/faq" @click="closeMenu" class="hover:text-gray-400">FAQ</nuxt-link></li>
        <li><nuxt-link to="/login" @click="closeMenu" class="hover:text-gray-400">Login</nuxt-link></li>
        <li><nuxt-link to="/signup" @click="closeMenu" class="hover:text-gray-400">Signup</nuxt-link></li>
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

// New method to close the menu
const closeMenu = () => {
  menuOpen.value = false
}
</script>

<style scoped>
header {
  transition: background-color 0.3s;
}
</style>
