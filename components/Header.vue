<template>
  <header v-if="!isBriefGeneratorPage" :class="headerClass">
    <div class="container max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 flex justify-between items-center">
      <!-- Logo Section -->
      <div class="flex items-center">
        <nuxt-link to="/">
          <img src="/assets/sauki-logo.png" alt="Sauki Logo" class="h-9 w-auto" />
        </nuxt-link>
      </div>

      <!-- Desktop Navigation Links -->
      <nav class="hidden md:flex space-x-6 ml-6">
        <nuxt-link to="/" class="text-yellowc hover:text-yellow-600 text-sm">Home</nuxt-link>
        <nuxt-link to="/brief-generator" class="hover:text-yellowc text-sm">Brief Generator</nuxt-link>
      </nav>

      <!-- Mobile Menu Toggle Button (Hamburger) -->
      <button 
        @click="menuOpen = !menuOpen" 
        class="md:hidden text-white focus:outline-none"
        :class="{'text-black': isLightTheme, 'text-white': !isLightTheme}" 
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-10 h-12" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16m-7 6h7" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>

      <!-- Login and Signup Buttons for Desktop -->
      <div class="hidden md:flex items-center space-x-4">
        <nuxt-link 
          to="/" 
          @click="toggleTheme" 
          class="bg-saukiBlue text-white px-4 py-2 rounded-full text-sm flex items-center transition duration-300"
        >
          <!-- Conditionally Render Sun or Moon Icon Based on Theme -->
          <svg v-if="isLightTheme" width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 3.25C8.216 3.25 5 6.466 5 9.75C5 12.118 6.68 14.384 9 15.434V19.75H15V15.434C17.32 14.384 19 12.118 19 9.75C19 6.466 15.784 3.25 12 3.25z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          </svg>
          <svg v-else width="18" height="18" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path d="M12 6.25A5.75 5.75 0 1112 17.75A5.75 5.75 0 0112 6.25z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            <path d="M12 3V1.5m0 21V20.25M4.22 4.22L5.64 5.64m11.72 11.72L18.36 18.36M3 12H1.5m21 0H20.25M4.22 19.78L5.64 18.36m11.72-11.72L18.36 5.64" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
          </svg>
        </nuxt-link>

        <nuxt-link to="/signup" class="bg-saukiBlue text-white px-4 py-2 rounded-full text-sm transition duration-300">Sign Up</nuxt-link>
        <nuxt-link to="/login" class="border border-saukiBlue text-saukiBlue hover:bg-saukiBlue hover:text-white px-4 py-2 rounded-full text-sm transition duration-300">Login</nuxt-link>
      </div>
    </div>

    <!-- Mobile Navigation Menu -->
    <div v-show="menuOpen" class="md:hidden bg-black text-white px-6 py-4 space-y-4">
      <ul class="space-y-4">
        <li><nuxt-link to="/" @click="closeMenu" class="text-yellow-500 hover:text-yellow-600 text-sm">Home</nuxt-link></li>
        <li><nuxt-link to="/brief" @click="closeMenu" class="hover:text-white text-sm">Brief Generator</nuxt-link></li>
        <li><nuxt-link to="/signup" @click="closeMenu" class="hover:text-white text-sm">Signup</nuxt-link></li>
        <li><nuxt-link to="/login" @click="closeMenu" class="hover:text-white text-sm">Login</nuxt-link></li>
      </ul>
    </div>
  </header>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'

// Reactive state to manage theme (light or dark)
const isLightTheme = ref(false) // Default to dark theme (bg-black)

// Toggle theme between light and dark
const toggleTheme = () => {
  isLightTheme.value = !isLightTheme.value
}

// Menu state for mobile navigation
const menuOpen = ref(false)

// Close menu function for mobile links
const closeMenu = () => {
  menuOpen.value = false
}

// Compute the class for the header background based on theme state
const headerClass = computed(() => {
  return isLightTheme.value ? 'bg-white text-black' : 'bg-black bg-opacity-96 text-white'
})

// Detect if the current route is "brief-generator" to hide the header
const route = useRoute()
const isBriefGeneratorPage = computed(() => route.path === '/brief-generator')
</script>

<style scoped>
header {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
