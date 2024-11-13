<template>
  <header :class="headerClass">
    <div class="container max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center">
        <nuxt-link to="/">
          <img src="/assets/sauki-logo.png" alt="Sauki Logo" class="h-9 w-auto" />
        </nuxt-link>
      </div>

      <!-- Navigation Links with Smaller Text -->
      <nav class="hidden md:flex space-x-6 ml-6">
        <nuxt-link to="/" class="text-yellowc hover:text-Yellowc text-sm">Home</nuxt-link>
        <nuxt-link to="/brief" class="hover:text-yellowc text-sm">Brief Generator</nuxt-link>
      </nav>

      <!-- Login and Signup Buttons (Hidden on Mobile) -->
      <div class="hidden md:flex items-center space-x-4">
        <nuxt-link to="/signup" class="bg-saukiBlue text-white px-4 py-2 rounded-full text-sm flex items-center transition duration-300">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 2v2m0 12v2m6.364-8.364l-1.414 1.414M4.222 4.222l1.414 1.414M21 12h-2m-12 0H3m15.364 4.364l-1.414-1.414M4.222 19.778l1.414-1.414" />
          </svg>
        </nuxt-link>
        <nuxt-link to="/signup" class="bg-saukiBlue text-white px-4 py-2 rounded-full text-sm transition duration-300">Sign Up</nuxt-link>
        <nuxt-link to="/login" class="border border-saukiBlue text-saukiBlue hover:bg-saukiBlue hover:text-white px-4 py-2 rounded-full text-sm transition duration-300">Login</nuxt-link>
      </div>

      <!-- Theme Toggle (Sun) Button -->
      <!-- <button @click="toggleTheme" class="text-white">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 2v2m0 12v2m6.364-8.364l-1.414 1.414M4.222 4.222l1.414 1.414M21 12h-2m-12 0H3m15.364 4.364l-1.414-1.414M4.222 19.778l1.414-1.414" />
        </svg>
      </button> -->
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-if="menuOpen" class="md:hidden bg-black text-white px-6 py-4 space-y-4">
      <ul class="space-y-4">
        <li><nuxt-link to="/" @click="closeMenu" class="text-yellow-500 hover:text-yellow-600 text-sm">Home</nuxt-link></li>
        <li><nuxt-link to="/brief" @click="closeMenu" class="hover:text-white text-sm">Briefs</nuxt-link></li>
        <li><nuxt-link to="/signup" @click="closeMenu" class="hover:text-white text-sm">Signup</nuxt-link></li>
        <li><nuxt-link to="/login" @click="closeMenu" class="hover:text-white text-sm">Login</nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// Reactive state to manage theme (light or dark)
const isLightTheme = ref(false) // Default to dark theme (bg-black)

// Toggle theme between light and dark
const toggleTheme = () => {
  isLightTheme.value = !isLightTheme.value
}

// Compute the class for the header background based on theme state
const headerClass = computed(() => {
  return isLightTheme.value ? 'bg-white text-black' : 'bg-black bg-opacity-96 text-white'
})
</script>

<style scoped>
header {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
