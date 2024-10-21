<template>
  <header class="bg-gray-900 text-white shadow-lg">
    <div class="container mx-auto px-6 py-4 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center">
        <!-- <img src="/ai-logo.svg" alt="AI Logo" class="h-12 w-12 mr-3" /> -->
        <span class="text-2xl font-semibold">AI Innovators</span>
      </div>

      <!-- Navigation Links -->
      <nav class="hidden md:flex space-x-6">
        <nuxt-link to="/" class="hover:text-gray-400">Home</nuxt-link>
        <nuxt-link to="/about" class="hover:text-gray-400">About</nuxt-link>
        <nuxt-link to="/services" class="hover:text-gray-400">Services</nuxt-link>
        <nuxt-link to="/contact" class="hover:text-gray-400">Contact</nuxt-link>
        <nuxt-link to="/blog" class="hover:text-gray-400">Blog</nuxt-link>
      </nav>

      <!-- Search and Login Buttons -->
      <div class="flex items-center space-x-4">
        <button class="text-gray-300 hover:text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M10 21h4m-2-4v4m1-10a7 7 0 110-14 7 7 0 010 14z" />
          </svg>
        </button>
        <nuxt-link to="/login" class="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg">
          Login
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
        <li><nuxt-link to="/about" class="hover:text-gray-400">About</nuxt-link></li>
        <li><nuxt-link to="/services" class="hover:text-gray-400">Services</nuxt-link></li>
        <li><nuxt-link to="/contact" class="hover:text-gray-400">Contact</nuxt-link></li>
        <li><nuxt-link to="/blog" class="hover:text-gray-400">Blog</nuxt-link></li>
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
