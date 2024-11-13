<template>
    <div class="flex flex-col items-start justify-start min-h-screen bg-gray-100 px-8 py-4">
        <div class="text-left mx-4 max-w-full mb-4">
        <p class="text-xl font-semibold text-gray-700">Let's Make a Brief</p>
        
      </div>
      <!-- Select File Section (outside the border) -->
      <div class="flex flex-col items-start justify-start bg-white border-4 border-dashed border-gray-400 rounded-lg w-full p-8 mb-6">
        <div class="flex flex-col items-start">
          <!-- Drag-and-Drop Icon -->
          <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-gray-500 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M7 17l3 3 7-7M4 7h16M4 7v10M20 7v10" />
          </svg>
          <p class="text-lg text-left text-gray-600 mb-2">Drag and Drop to Upload Your Paper</p>
          <p class="text-sm text-left text-gray-500 mb-4">Or click to browse Gallery</p>
          
          <!-- Hidden file input and button to trigger it -->
          <input type="file" class="hidden" ref="fileInput" @change="handleFileUpload" />
          <button @click="triggerFileInput" class="mt-4 bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">
            Select File
          </button>
        </div>
      </div>
  
      <!-- Title for Brief Type Selection (outside the border) -->
      <div class="text-left mx-4 max-w-full mb-4">
        <p class="text-xl font-semibold text-gray-700">Select Your Brief Type:</p>
        <p class="text-lg text-gray-600">Upload your academic paper and generate summaries tailored to specific audiences.</p>
        <p class="text-sm text-gray-500">This can take up to 90 seconds.</p>
      </div>
  
      <!-- Brief Type Selection with Border -->
      <div class="w-full border-4 border-gray-300 rounded-lg p-6">
        <div class="flex justify-between gap-6">
          <!-- Donors -->
          <div @click="selectBriefType('Donors')" class="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer w-1/4 text-center">
            <p class="font-semibold text-gray-700">Donors</p>
          </div>
          <!-- Academics -->
          <div @click="selectBriefType('Academics')" class="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer w-1/4 text-center">
            <p class="font-semibold text-gray-700">Academics</p>
          </div>
          <!-- General Public -->
          <div @click="selectBriefType('General Public')" class="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer w-1/4 text-center">
            <p class="font-semibold text-gray-700">General Public</p>
          </div>
          <!-- Decision Makers -->
          <div @click="selectBriefType('Decision Makers')" class="bg-white border border-gray-300 p-6 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer w-1/4 text-center">
            <p class="font-semibold text-gray-700">Decision Makers</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  
  const fileInput = ref(null)
  const selectedBriefType = ref('')
  
  const triggerFileInput = () => {
    fileInput.value.click()
  }
  
  const handleFileUpload = (event) => {
    const file = event.target.files[0]
    if (file) {
      console.log("File uploaded:", file)
      // Handle file upload logic here (e.g., send file to API)
    }
  }
  
  const selectBriefType = (briefType) => {
    selectedBriefType.value = briefType
    console.log("Selected Brief Type:", briefType)
    // Handle brief type selection (e.g., set it in state, send it to API)
  }
  </script>
  
  <style scoped>
  /* Hide the default file input */
  input[type="file"] {
    display: none;
  }
  
  /* Button hover effect */
  button {
    transition: background-color 0.3s ease;
  }
  
  /* Style for brief selection cards */
  div:hover {
    background-color: #f3f4f6;
  }
  </style>
  