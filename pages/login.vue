<template>
    <div class="flex min-h-screen items-center justify-center bg-indigo-50">
      <div class="flex max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Left Side - Login Form -->
        <div class="md:w-1/2 p-8 bg-indigo-100 flex flex-col justify-center">
          <h2 class="text-4xl font-bold text-indigo-700 mb-6 text-center">Welcome Back</h2>
          <p class="text-center text-indigo-500 mb-8">Sign in to access your account</p>
          <form @submit.prevent="handleLogin" class="space-y-6">
            <!-- Email Field -->
            <div>
              <label class="block text-indigo-600 font-semibold">Email</label>
              <input
                type="email"
                v-model="email"
                placeholder="Your email"
                class="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <!-- Password Field -->
            <div>
              <label class="block text-indigo-600 font-semibold">Password</label>
              <input
                type="password"
                v-model="password"
                placeholder="Your password"
                class="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Log In
            </button>
          </form>
          <!-- Additional Links -->
          <p class="text-center text-indigo-500 mt-4">
            Forgot password? <a href="#" class="text-indigo-700 font-semibold">Reset here</a>
          </p>
        </div>
  
        <!-- Right Side - Image Display -->
        <div class="hidden md:block md:w-1/2">
          <img
            src="assets/login.jpg"
            alt="Login Image"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Define reactive properties
  import { ref } from 'vue';
  
  const email = ref('');
  const password = ref('');
  
  // Handle form submission
  function handleLogin() {
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    // Add logic for authentication here
  }
  </script>
  
  <style>
  /* Custom CSS for Nuxt styles if necessary */
  </style>
  