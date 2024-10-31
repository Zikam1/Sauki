<template>
<div class="flex items-center justify-center h-screen bg-gray-900 text-white relative overflow-hidden"> <!-- Full height for the screen -->
    <!-- Background Image -->
    <div class="absolute inset-0">
        <img src="/assets/book3.jpg" alt="Background Image" class="w-full h-full object-cover opacity-70" />
    </div>

    <div class="container mx-auto flex flex-col md:flex-row items-center md:px-24 py-8 relative z-10">

        <!-- Text Section -->
        <div class="w-full md:w-1/2 p-6 md:p-12 flex justify-start bg-white bg-opacity-80 rounded-lg shadow-lg">
            <div class="max-w-md">
                <h1 class="text-3xl md:text-4xl font-bold mb-4 text-gray-800">
                    Turn complex modelling papers into simple Yellow<br>Curved Line briefs in 3 easy steps
                </h1>
                <p class="text-base md:text-lg mb-6 text-gray-700">
                    Make complex modelling papers simple with Yellow Curved Line briefs in three easy steps.
                </p>
                <a href="#" class="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-500 rounded-md transition duration-300">
                    Get Started
                </a>
            </div>
        </div>
    </div>
</div>
<section class="">
    <div class="flex items-center justify-center  bg-blue-100">
         <div class="flex items-center justify-center w-24 h-24 rounded-full bg-blue-500 text-white animate-bounce">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16.586l5.707-5.707a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L12 16.586z"/>
      </svg>
    </div>
  </div>


  <div class="min-h-screen flex items-center justify-center p-10 overflow-hidden relative bg-cover bg-center" style="background-image: url('/assets/book3.jpg');">
    <!-- Overlay for better contrast -->
    <div class="absolute inset-0 bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-80"></div>

    <div class="relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-12 px-6 lg:px-12 max-w-5xl">
        <!-- Upload Form Section (Left) -->
        <div class="w-full lg:w-1/2 bg-white bg-opacity-95 p-8 rounded-lg shadow-lg border border-gray-200 flex flex-col items-center text-center">
            <!-- Section Title -->
            <h2 class="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v9m-7-7l7-7 7 7" />
                </svg>
                Upload Your Document
            </h2>

            <!-- File Input -->
            <label class="w-full p-6 border-2 border-dashed border-purple-300 rounded-lg flex flex-col items-center justify-center cursor-pointer hover:bg-purple-50 transition duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10 text-purple-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                </svg>
                <span class="text-gray-600 font-medium">Select a file to upload</span>
                <input type="file" class="hidden" />
            </label>

            <!-- Info & Upload Button -->
            <p class="text-sm text-gray-500 mt-4">Supported formats: JPG, PNG, PDF. Max 10MB</p>
            <button class="w-full mt-6 px-5 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold shadow-md transform transition duration-300 ease-in-out hover:scale-105">
                Upload Now
            </button>
        </div>

        <!-- Image Section (Right) -->
        <div class="w-full lg:w-1/2 flex items-center justify-center">
            <div class="rounded-lg shadow-lg overflow-hidden">
                <img src="/assets/book1.jpg" alt="Document Illustration" class="w-full h-full object-cover transform hover:scale-105 transition duration-300 ease-in-out" />
            </div>
        </div>
    </div>
</div>





    <div class="container mx-auto px-6 py-16">
  <h2 class="text-4xl font-bold text-center mb-8">Select Your Brief</h2>
  <div class="max-w-xl mx-auto">
    <form @submit.prevent="uploadFile">
      <!-- Dropzone -->
      <div
        @drop.prevent="handleDrop"
        @dragover.prevent="handleDragOver"
        class="flex flex-col items-center justify-center p-8 bg-white border-dashed border-4 border-gray-400 text-center rounded-lg cursor-pointer hover:bg-gray-50 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-gray-500 mb-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M16.707 9.293a1 1 0 00-1.414 0L11 13.586V7a1 1 0 10-2 0v6.586l-4.293-4.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 000-1.414z"
          />
        </svg>
        <p class="text-gray-900 mb-2">
          Upload a journal PDF and generate summaries tailored to specific audiences.
        </p>
        <input
          type="file"
          ref="fileInput"
          class="hidden"
          @change="onFileChange"
        />
        <!-- Flex container for buttons -->
        <div class="flex flex-wrap justify-center space-x-4 mt-4">
          <button
            @click.prevent="triggerFileInput"
            class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 w-full md:w-auto mb-2"
          >
            Donors
          </button>
          <button
            @click.prevent="triggerFileInput"
            class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 w-full md:w-auto mb-2"
          >
            Academics
          </button>
          <button
            @click.prevent="triggerFileInput"
            class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 w-full md:w-auto mb-2"
          >
           General Public
          </button>
          <button
            @click.prevent="triggerFileInput"
            class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-500 w-full md:w-auto mb-2"
          >
            Decision Makers
          </button>
        </div>
      </div>
      <p v-if="selectedFile" class="mt-4 text-center text-gray-700">
        Selected file: {{ selectedFile.name }}
      </p>
      <button
        type="submit"
        class="bg-indigo-600 w-full text-white mt-8 px-4 py-2 rounded-lg hover:bg-indigo-500 transition"
      >
        Upload File
      </button>
    </form>
  </div>
</div>


<div class="container mx-auto px-6 py-16">
  <h2 class="text-4xl font-bold text-center mb-8">Generate Your Brief</h2>
  <div class="max-w-xl mx-auto">
    <form @submit.prevent="uploadFile">
      <!-- Dropzone -->
      <div
        @drop.prevent="handleDrop"
        @dragover.prevent="handleDragOver"
        class="flex flex-col items-center justify-center p-8 bg-white border-dashed border-4 border-gray-400 text-center rounded-lg cursor-pointer hover:bg-gray-50 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-12 w-12 text-gray-500 mb-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M16.707 9.293a1 1 0 00-1.414 0L11 13.586V7a1 1 0 10-2 0v6.586l-4.293-4.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 000-1.414z"
          />
        </svg>
        <p class="text-gray-900 mb-2">
          Generate Brief Regenerate
        </p>
        <input
          type="file"
          ref="fileInput"
          class="hidden"
          @change="onFileChange"
        />
        <!-- Flex container for buttons -->
        <div class="flex space-x-4 mt-4">
          <button
            @click.prevent="triggerFileInput"
            class="bg-indigo-500 text-white px-4 py-2 rounded-lg hover:bg-indigo-500"
          >
            General brief
          </button>
          <button
            type="button"
            class="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-500"
          >
           Regenerate
          </button>
        </div>
        <!-- Lorem write-up below the buttons -->
        <p class="mt-4 text-gray-700 text-center">
          Creates and updates concise summaries of articles, helping researchers quickly grasp key insights and findings with the aid of machine learning and natural language processing.
        </p>
      </div>
      <p v-if="selectedFile" class="mt-4 text-center text-gray-700">
        Selected file: {{ selectedFile.name }}
      </p>
      <button
        type="submit"
        class="bg-indigo-600 w-full text-white mt-8 px-4 py-2 rounded-lg hover:bg-indigo-500 transition"
      >
        Upload File
      </button>
    </form>
  </div>
</div>

 
    <div class="overflow-hidden bg-gray-100 py-10">
  <div class="flex items-center space-x-8 animate-books-scroll">
    
    
  </div>
</div>


    <!-- Benefits Section -->
    <div class="bg-gray-200 py-16">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold mb-8">Why Choose Us?</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Benefit 1 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-indigo-600 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 16h-1v-4h1m0-4h-1m5 8a2 2 0 01-2 2H8a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v9z"
              />
            </svg>
            <h3 class="text-2xl font-semibold mb-2">What Does "Sauki mean?"</h3>
            <p class="text-gray-600">
              "Sauki," meaning "simple" in Hausa, reflects our mission to make complex modeling and science communication more accessible.
            </p>
          </div>
          <!-- Benefit 2 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-indigo-600 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14M12 5l7 7-7 7"
              />
            </svg>
            <h3 class="text-2xl font-semibold mb-2">What Problem does Sauki.ai Solve</h3>
            <p class="text-gray-600">
              helps researchers and professionals save time and improve comprehension
               by summarizing complex academic papers, making information more accessible
                and facilitating effective communication..
            </p>
          </div>
          <!-- Benefit 3 -->
          <div class="bg-white p-8 rounded-lg shadow-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-indigo-600 mx-auto mb-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M12 8c-1.104 0-2 .896-2 2 0 1.104.896 2 2 2 1.104 0 2-.896 2-2 0-1.104-.896-2-2-2zM12 14c-4.418 0-8 1.79-8 4v2h16v-2c0-2.21-3.582-4-8-4z"
              />
            </svg>
            <h3 class="text-2xl font-semibold mb-2">Wonderful! Who's building Sauki?</h3>
            <p class="text-gray-600">
              Sauki.ai is a product belonging to Corona Management Systems (CMS), with funding from Bill and Melinda Gates Foundation.
            </p>
          </div>
        </div>
      </div>
    </div>


  </section>
</template>

<script setup>
import { ref } from 'vue'

const selectedFile = ref(null)

const onFileChange = (event) => {
  selectedFile.value = event.target.files[0]
}

const triggerFileInput = () => {
  document.querySelector('input[type="file"]').click()
}

const handleDrop = (event) => {
  selectedFile.value = event.dataTransfer.files[0]
}

const handleDragOver = (event) => {
  event.preventDefault()
}

const uploadFile = () => {
  if (selectedFile.value) {
    console.log('File uploading:', selectedFile.value)
    // You can handle file upload logic here
  } else {
    alert('Please select a file first.')
  }
}
</script>

<style scoped>


  /* Apply animation to the books' container */
  .animate-books-scroll {
    display: flex;
    width: max-content; /* ensures books are in one line */
    animation: scrollBooks 50s linear infinite;
  }
/* Add any custom styling here */
</style>
