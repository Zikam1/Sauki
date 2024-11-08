<template>
<div class="relative flex items-center justify-center w-full min-h-screen overflow-hidden">
    <!-- Background Overlay -->
    <div class="absolute inset-0 bg-black"></div>

    <div class="container mx-auto flex items-center justify-center relative z-10" style="padding-top: 12%; padding-bottom: 10%;">
        <!-- Centered Text Section with Responsive Width and Yellow Underline on "simple Yellow" -->
        <div class="text-center w-full px-12 md:w-4/5 lg:w-3/4">
            <h1 class="text-6xl md:text-7xl font-bold text-white leading-tight" style="line-height: 1.5;">
                Turn complex modelling papers into 
                <span class="relative inline-block">
                    <span class="text-yellow-400">simple</span>
                    <!-- First underline only under "simple" -->
                    <span class="absolute left-0 w-full h-1 bg-yellow-400 -bottom-1"></span>
                    <!-- Second underline only under "simple" -->
                    <span class="absolute left-0 w-full h-1 bg-yellow-400 -bottom-3"></span>
                </span>
                <span class="block mt-2">Curved Line briefs in 3 easy steps</span>
            </h1>
        </div>
    </div>
</div>

<section class="bg-black">
  <!-- Centered Bouncing Arrow Section -->
  <div class="flex items-center justify-center" style="height: 45vh; margin-bottom: 4rem;">
    <div class="flex items-center justify-center w-24 h-24 rounded-full border-4 border-white text-white animate-bounce" style="transform: translateY(-50px);">
      <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16.586l5.707-5.707a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L12 16.586z"/>
      </svg>
    </div>
  </div>

  <!-- Form Section -->
  <div class="relative z-10 container mx-auto flex flex-col items-center gap-8 pb-48 px-6 lg:px-12 max-w-6xl">
    <!-- Upload Form Section with Step Label -->
    <div class="w-full lg:w-2/3 flex flex-col lg:flex-row items-center gap-4 relative mt-12 lg:mt-16">
      
      <!-- Step Label (Left Side) -->
      <div class="flex-shrink-0 flex items-center justify-center text-center mb-4 lg:mb-0">
        <span class="text-white px-6 py-2 rounded-full font-semibold text-lg md:text-xl lg:text-3xl xl:text-4xl">
          Step 1
        </span>
      </div>
      
      <!-- Upload Form (Right Side) -->
      <div class="w-full bg-white bg-opacity-90 p-6 rounded-lg shadow-xl border border-gray-200 flex flex-col items-center text-center">
        <!-- Outer Upload Title - Positioned outside the form container -->
        <h2 class="absolute top-[-80px] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-500 flex items-center gap-3">
          Upload Your Paper
        </h2>

        <!-- Redesigned File Input -->
        <label class="w-full p-5 border-2 border-blue-400 rounded-lg flex flex-col items-center justify-center cursor-pointer bg-blue-50 hover:bg-blue-100 transition duration-300 transform hover:scale-105 mb-4">
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-12 md:h-14 lg:h-16 w-12 md:w-14 lg:w-16 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <span class="text-gray-600 font-medium text-sm md:text-base lg:text-lg">
              <span class="text-blue-500">Drag and drop file here</span> or <span class="text-yellow-500 font-bold">click Here</span> to browse Gallery
            </span>
          </div>
          <input type="file" class="hidden" />
        </label>

        <!-- Additional Info & Upload Button -->
        <p class="text-xs md:text-sm text-gray-500 mt-2">Accepted format: PDF</p>
        
        <button class="w-full mt-4 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold shadow-md transform transition duration-300 ease-in-out hover:scale-105">
          Upload Your Paper
        </button>
      </div>
    </div>
  </div>


  <div class="relative z-10 container mx-auto flex flex-col items-center gap-8 px-6 lg:px-12 max-w-6xl">
  <!-- Upload Form Section with Step Label -->
  <div class="w-full lg:w-2/3 flex flex-col lg:flex-row items-center gap-4 relative mt-12 lg:mt-16">
    
    <!-- Step Label (Left Side) -->
    <div class="flex-shrink-0 flex items-center justify-center text-center mb-4 lg:mb-0">
      <span class="text-white px-6 py-2 rounded-full font-semibold text-lg md:text-xl lg:text-3xl xl:text-4xl">
        Step 2
      </span>
    </div>
    
    <!-- Upload Form (Right Side) -->
    <div class="w-full bg-white bg-opacity-90 p-6 rounded-lg shadow-xl border border-gray-200 flex flex-col items-center text-center">
      <!-- Outer Upload Title - Positioned outside the form container -->
      <h2 class="absolute top-[-80px] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-500 flex items-center gap-3">
        Select Your Brief
      </h2>

      <!-- Redesigned File Input -->
      <label class="w-full p-5 border-2 border-blue-400 rounded-lg flex flex-col items-center justify-center cursor-pointer bg-blue-50 hover:bg-blue-100 transition duration-300 transform hover:scale-105 mb-4">
        <div class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-12 md:h-14 lg:h-16 w-12 md:w-14 lg:w-16 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span class="text-gray-600 font-medium text-sm md:text-base ">
            <span class="text-blue-500"> Upload a journal PDF and generate summaries tailored to specific audiences</span>
          </span>
        </div>
        <input type="file" class="hidden" />
      </label>

      <!-- Additional Info & Upload Button -->
      <p class="text-xs md:text-sm text-gray-900 mt-2 text-left">Select your Brief Type :</p>
      
      <!-- Audience Selection -->
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-4 mt-6 w-full">
        <button @click.prevent="triggerFileInput" class="flex-grow bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition transform hover:scale-105">Donors</button>
        <button @click.prevent="triggerFileInput" class="flex-grow bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition transform hover:scale-105">Academics</button>
        <button @click.prevent="triggerFileInput" class="flex-grow bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition transform hover:scale-105">Public</button>
        <button @click.prevent="triggerFileInput" class="flex-grow bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition transform hover:scale-105">Decision Makers</button>
      </div>

      <button class="w-full mt-4 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold shadow-md transform transition duration-300 ease-in-out hover:scale-105">
        Upload Your Paper
      </button>
    </div>
  </div>
</div>










<div class="relative bg-gradient-to-br from-gray-600 to-gray-800 min-h-[80vh] py-12 opacity-100">
  <!-- Background Images for Top and Bottom Sections -->
  <div class="absolute top-0 left-0 w-full h-1/3 bg-cover bg-center opacity-20" style="background-image: url('/assets/book2.jpg');"></div>
  <div class="absolute bottom-0 left-0 w-full h-1/3 bg-cover bg-center opacity-20" style="background-image: url('/assets/book5.jpg');"></div>

  <!-- Main Container -->
  <div class="relative container mx-auto px-4 md:px-6 lg:px-10 flex flex-col lg:flex-row items-center lg:items-stretch space-y-12 lg:space-y-0 lg:space-x-6">
    
    <!-- Left Content Section -->
    <div class="lg:w-5/12 text-center lg:text-left text-white z-10 flex flex-col justify-center px-4 md:px-8 lg:px-6">
      <h2 class="text-2xl lg:text-3xl font-bold mb-4">Create Your Story Brief</h2>
      <p class="text-base lg:text-lg mb-6 leading-relaxed">Turn your ideas into structured narratives that engage and inform. Ideal for researchers and storytellers aiming to make a lasting impact.</p>

      <!-- Left Image with Hover Overlay -->
      <div class="relative group w-full rounded-lg overflow-hidden shadow-lg mt-4 lg:mt-0">
        <img src="/assets/book3.jpg" alt="Inspiration" class="w-full h-full object-cover transition-opacity duration-300 ease-in-out rounded-lg">
        
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
          <div class="text-center p-4 text-white">
            <h3 class="text-lg font-semibold mb-2">Explore New Ideas</h3>
            <p class="text-sm">Discover insights to enhance your story brief.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Centered Arrow Icon -->
    <div class="hidden lg:flex items-center">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
      </svg>
    </div>

    <!-- Right Form Section -->
    <div class="lg:w-5/12 bg-white p-6 md:p-8 rounded-lg shadow-xl relative z-10 flex flex-col justify-center px-4 md:px-6 lg:px-6">
      <h2 class="text-xl md:text-2xl lg:text-3xl font-bold text-center text-blue-600 mb-4">Generate Your Brief</h2>
      <form @submit.prevent="uploadFile" class="w-full space-y-6">
        
        <!-- Dropzone Section -->
        <div
          @drop.prevent="handleDrop"
          @dragover.prevent="handleDragOver"
          class="flex flex-col items-center justify-center p-6 bg-gray-100 border-dashed border-2 border-gray-300 rounded-lg cursor-pointer hover:bg-gray-200 transition"
        >
          <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-gray-500 mb-3" viewBox="0 0 20 20" fill="currentColor">
            <path d="M16.707 9.293a1 1 0 00-1.414 0L11 13.586V7a1 1 0 10-2 0v6.586l-4.293-4.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 000-1.414z" />
          </svg>
          <p class="text-gray-700 mb-2">Upload Your Document</p>
          <input type="file" ref="fileInput" class="hidden" @change="onFileChange" />

          <!-- Action Buttons -->
          <div class="flex space-x-3 mt-4">
            <button @click.prevent="triggerFileInput" class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition">Upload Brief</button>
            <button type="button" class="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition">Regenerate</button>
          </div>
        </div>

        <!-- Display Selected File -->
        <p v-if="selectedFile" class="mt-4 text-center text-gray-600">Selected file: {{ selectedFile.name }}</p>
        
        <!-- Submit Button -->
        <button type="submit" class="bg-blue-600 w-full text-white py-2 rounded-lg hover:bg-blue-500 transition">
          Upload File
        </button>
      </form>
    </div>
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
              class="h-12 w-12 text-blue-600 mx-auto mb-4"
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
              class="h-12 w-12 text-blue-600 mx-auto mb-4"
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
