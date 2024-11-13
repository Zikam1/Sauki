<template>
  <header :class="headerClass">
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
        <nuxt-link to="/brief" class="hover:text-yellowc text-sm">Brief Generator</nuxt-link>
      </nav>

      <!-- Mobile Menu Toggle Button (Hamburger) -->
      <button 
        @click="menuOpen = !menuOpen" 
        class="md:hidden text-white focus:outline-none"
        aria-label="Toggle menu"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-10 h-12" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16m-7 6h7" stroke="currentColor" stroke-width="2"/>
        </svg>
      </button>

      <!-- Login and Signup Buttons for Desktop -->
      <div class="hidden md:flex items-center space-x-4">
        <nuxt-link to="/signup" class="bg-saukiBlue text-white px-4 py-2 rounded-full text-sm flex items-center transition duration-300">
          <svg width="24" height="20" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 7.5C10.5 9.1569 9.1569 10.5 7.5 10.5C5.8431 10.5 4.5 9.1569 4.5 7.5C4.5 5.8431 5.8431 4.5 7.5 4.5C9.1569 4.5 10.5 5.8431 10.5 7.5Z" fill="#FFFFFF" fill-opacity="0.15" stroke="#FFFFFF" stroke-width="1"/>
            <path d="M12.2078 4.2693L12.2857 4.21429M4.21429 12.2857L4.2922 12.2078M7.5 1.5V1.25M7.5 13.75V13.5M1.5 7.5H1.25M13.75 7.5H13.5M4.2922 4.2693L4.2143 4.21429M12.2857 12.2857L12.2078 12.2078" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"/>
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
</script>

<style scoped>
header {
  transition: background-color 0.3s ease, color 0.3s ease;
}
</style>
