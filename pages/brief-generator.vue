<template>
  <div class="flex flex-col items-start justify-start min-h-screen bg-black bg-opacity-96 px-4 sm:px-8 py-4">
    <header :class="headerClass">
      <div class="container max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-4 flex justify-between items-center">
        <!-- Logo Section (Left Edge) -->
        <div class="flex items-center">
          <nuxt-link to="/">
            <!-- Display JPEG Image Logo on the Left Edge -->
            <img src="../assets/sauki-logo.png" alt="Logo" class="h-9 w-auto" />
          </nuxt-link>
        </div>

        <!-- Right Hand with Name, Pink Circle, and Moon/Star Icon -->
        <div class="flex items-center space-x-4">
          <!-- Moon and Star Icon Toggle -->
          <button 
            @click="toggleTheme" 
            class="text-white focus:outline-none ml-4"
            :class="{'text-black': isLightTheme, 'text-white': !isLightTheme}" 
            aria-label="Toggle theme"
          >
            <!-- Moon and Star Icon -->
            <svg v-if="isLightTheme" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 6.25A5.75 5.75 0 1112 17.75A5.75 5.75 0 0112 6.25z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
              <path d="M12 3V1.5m0 21V20.25M4.22 4.22L5.64 5.64m11.72 11.72L18.36 18.36M3 12H1.5m21 0H20.25M4.22 19.78L5.64 18.36m11.72-11.72L18.36 5.64" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            </svg>
            <svg v-else width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 3.25C8.216 3.25 5 6.466 5 9.75C5 12.118 6.68 14.384 9 15.434V19.75H15V15.434C17.32 14.384 19 12.118 19 9.75C19 6.466 15.784 3.25 12 3.25z" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"/>
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Title Section -->
    <div class="text-left mx-4 max-w-full mb-4">
      <p class="text-lg font-semibold text-gray-300">Let's Make a Brief</p>
    </div>

    <!-- Select File Section (with border) -->
    <div class="flex flex-col items-start justify-start bg-black bg-opacity-96 border-4 border-gray-900 rounded-lg w-full p-4 sm:p-8 mb-6 mx-auto">
      <div class="text-left mx-4 max-w-full mb-4">
        <p class="text-lg font-semibold text-gray-300">Upload Your Paper</p>
      </div>

      <!-- File Upload Instructions -->
      <div class="flex flex-col sm:flex-row items-center border border-gray-400 rounded-lg p-3 mb-4 space-y-1 sm:space-y-0 sm:space-x-2">
        <p class="text-xs text-gray-400">Drag and Drop to Upload Your Paper</p>
        <p class="text-xs text-gray-400">Or</p>
        <p class="text-xs text-yellow-500 font-semibold cursor-pointer" @click="triggerFileInput">click here</p>
        <p class="text-xs text-gray-400">to browse Gallery</p>

        <!-- Hidden file input -->
        <input type="file" class="hidden" ref="fileInput" @change="handleFileUpload" />
      </div>

      <!-- Title for Brief Type Selection -->
      <div class="text-left mx-4 mb-4">
        <p class="text-sm font-semibold text-gray-300 mb-4">Select Your Brief Type:</p>
        <p class="text-sm text-gray-400 mb-1">Upload your academic paper and generate summaries tailored to specific audiences.</p>
        <p class="text-sm text-gray-400">This can take up to 90 seconds.</p>
      </div>

      <!-- Brief Type Selection with Border -->
      <div class="w-full border-gray-300 rounded-lg p-3 sm:p-5">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <!-- Donors -->
          <div @click="selectBriefType('Donors')" class="bg-saukiBlue border border-gray-300 p-3 sm:p-5 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer text-center">
            <svg class="inline-block mr-2 text-yellow-500" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M12 8v8l5-4z" />
            </svg>
            <p class="font-medium text-gray-700 text-sm">Donors</p>
          </div>

          <!-- Academics -->
          <div @click="selectBriefType('Academics')" class="bg-white border border-gray-300 p-3 sm:p-5 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer text-center">
            <svg class="inline-block mr-2 text-gray-700" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 10V3l7 4.5-7 4.5zm0 4.5l7-4.5-7-4.5z" />
            </svg>
            <p class="font-medium text-gray-700 text-sm">Academics.</p>
          </div>

          <!-- General Public -->
          <div @click="selectBriefType('General Public')" class="bg-white border border-gray-300 p-3 sm:p-5 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer text-center">
            <svg class="inline-block mr-2 text-gray-700" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M12 8v8l5-4z" />
            </svg>
            <p class="font-medium text-gray-700 text-sm">General Public</p>
          </div>

          <!-- Decision Makers -->
          <div @click="selectBriefType('Decision Makers')" class="bg-white border border-gray-300 p-3 sm:p-5 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer text-center">
            <svg class="inline-block mr-2 text-gray-700" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 10V3l7 4.5-7 4.5zm0 4.5l7-4.5-7-4.5z" />
            </svg>
            <p class="font-medium text-gray-700 text-sm">Decision Makers</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Loading Indicator -->
    <div v-if="isLoading" class="flex justify-center items-center mt-6">
      <svg class="animate-spin w-8 h-8 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path d="M12 2a10 10 0 11-10 10A10 10 0 0112 2zM12 22a10 10 0 1110-10A10 10 0 0112 22z" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"/>
      </svg>
    </div>

    <!-- Resulting Summary Section -->
    <div v-if="summaryResult" class="mt-6">
      <p class="text-lg text-white font-semibold">Summary Result for: {{ briefType }}</p>
      <p class="text-sm text-gray-200">{{ summaryResult }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isLightTheme = ref(true);
const briefType = ref('');
const isLoading = ref(false);
const summaryResult = ref('');
const fileInput = ref(null);

const toggleTheme = () => {
  isLightTheme.value = !isLightTheme.value;
};

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    console.log("File uploaded:", file.name);
    // Simulate a summary fetch based on the file upload
    fetchSummary();
  }
};

const selectBriefType = (type) => {
  briefType.value = type;
  fetchSummary();
};

const fetchSummary = async () => {
  isLoading.value = true;
  summaryResult.value = '';
  
  // Simulate fetching summary (replace with actual API call)
  setTimeout(() => {
    summaryResult.value = `This is a summary for ${briefType.value}`;
    isLoading.value = false;
  }, 2000);
};
</script>

<style scoped>
.bg-saukiBlue {
  background-color: #1a72b2;
}
</style>
