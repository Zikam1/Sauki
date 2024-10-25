<template>
    <div class="flex min-h-screen items-center justify-center bg-indigo-50">
      <div class="flex max-w-5xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <!-- Left Side - Signup Form -->
        <div class="md:w-1/2 p-8 bg-indigo-100 flex flex-col justify-center">
          <h2 class="text-4xl font-bold text-indigo-700 mb-6 text-center">Create an Account</h2>
          <p class="text-center text-indigo-500 mb-8">Sign up to start your journey</p>
          <form @submit.prevent="handleSignup" class="space-y-6">
            <!-- Name Field -->
            <div>
              <label class="block text-indigo-600 font-semibold">Name</label>
              <input
                type="text"
                v-model="name"
                placeholder="Your full name"
                class="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
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
            <!-- Confirm Password Field -->
            <div>
              <label class="block text-indigo-600 font-semibold">Confirm Password</label>
              <input
                type="password"
                v-model="confirmPassword"
                placeholder="Confirm your password"
                class="w-full px-4 py-3 rounded-lg border border-indigo-300 focus:outline-none focus:border-indigo-500"
              />
            </div>
            <!-- Submit Button -->
            <button
              type="submit"
              class="w-full py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>
          <!-- Additional Links -->
          <p class="text-center text-indigo-500 mt-4">
            Already have an account? <a href="#" class="text-indigo-700 font-semibold">Log in here</a>
          </p>
        </div>
  
        <!-- Right Side - Image Display -->
        <div class="hidden md:block md:w-1/2">
          <img
            src="assets/signup.jpg"
            alt="Signup Image"
            class="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  // Define reactive properties
  import { ref } from 'vue';
  
  const name = ref('');
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  
  // Handle form submission
  function handleSignup() {
    console.log('Name:', name.value);
    console.log('Email:', email.value);
    console.log('Password:', password.value);
    console.log('Confirm Password:', confirmPassword.value);
    // Add logic for signup/authentication here
  }
  </script>
  
  <style>
  /* Custom CSS for Nuxt styles if necessary */
  </style>
  