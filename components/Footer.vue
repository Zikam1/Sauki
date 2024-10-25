<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-6 lg:px-12">
      <div class="flex flex-col md:flex-row justify-between items-center mb-8">
        <!-- Brand Logo and AI Tagline -->
        <div class="mb-4 md:mb-0">
          <h1 class="text-2xl font-bold">Saukiai</h1>
          <p class="text-gray-400">Driving AI innovation for a better tomorrow.</p>
        </div>

        <!-- Social Media Icons -->
        <div class="flex space-x-4">
          <a href="#" class="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2.04c-5.53 0-10 4.47-10 10 0 4.42 3.58 8.07 8.16 8.93v-6.3h-2.45v-2.6h2.45v-1.97c0-2.44 1.47-3.79 3.63-3.79 1.04 0 2.11.18 2.11.18v2.32h-1.19c-1.17 0-1.53.73-1.53 1.47v1.79h2.69l-.43 2.6h-2.26v6.3c4.58-.86 8.16-4.51 8.16-8.93 0-5.53-4.47-10-10-10z" />
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.34 2c-.88.52-1.85.9-2.88 1.11a4.48 4.48 0 00-7.63 4.08A12.76 12.76 0 011.67 2.93a4.47 4.47 0 001.39 5.96A4.4 4.4 0 01.96 8v.05a4.48 4.48 0 003.55 4.38 4.42 4.42 0 01-2.04.08 4.48 4.48 0 004.18 3.11A8.94 8.94 0 010 19.54a12.69 12.69 0 006.88 2.01c8.27 0 12.78-6.85 12.78-12.78l-.01-.58A9.1 9.1 0 0023 3z" />
            </svg>
          </a>
          <a href="#" class="text-gray-400 hover:text-white">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M16 8a6 6 0 11-12 0 6 6 0 0112 0zM4 16v6h16v-6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2z" />
            </svg>
          </a>
        </div>
      </div>

      <!-- Footer Sections -->
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- About Us -->
        <div>
          <h3 class="text-xl font-semibold mb-4">About Us</h3>
          <p class="text-gray-400">
            We specialize in developing cutting-edge AI solutions that drive growth, efficiency, and innovation.
          </p>
        </div>

        <!-- Useful Links -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Useful Links</h3>
          <ul class="space-y-2">
            <li><nuxt-link to="/" class="text-gray-400 hover:text-white">Home</nuxt-link></li>
            <li><nuxt-link to="/about" class="text-gray-400 hover:text-white">Brief Generator</nuxt-link></li>
          </ul>
        </div>

        <!-- Subscribe to Newsletter -->
        <div>
          <h3 class="text-xl font-semibold mb-4">Subscribe</h3>
          <p class="text-gray-400 mb-4">
            Stay updated with the latest in Saukiai by subscribing to our newsletter.
          </p>
          <form class="flex flex-col">
            <input
              type="email"
              placeholder="Your email"
              class="px-4 py-2 bg-gray-800 text-white rounded-lg mb-4"
            />
            <button
              type="submit"
              class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-600 transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="border-t border-gray-700 pt-6 mt-6 text-center">
        <p class="text-gray-400">
          &copy; 2024 Sauki. All Rights Reserved
        </p>
        <p class="text-gray-400 mt-2">
          <nuxt-link to="/privacy-policy" class="hover:text-white">Privacy Policy</nuxt-link> |
          <nuxt-link to="/terms" class="hover:text-white">Terms of Service</nuxt-link>
        </p>
      </div>
    </div>
  </footer>
</template>
