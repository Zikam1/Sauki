<template>
   <div class="relative flex items-center justify-center w-full h-1/2 overflow-hidden"> <!-- Half the screen height -->
    <!-- Background Image -->
    <div class="absolute inset-0 h-full w-full">
      <img src="/assets/bookin.avif" alt="Background Image" class="w-full h-full object-cover opacity-70" />
    </div>

    <!-- Background Overlay -->
    <div class="absolute inset-0  bg-gray-900 opacity-80"></div>

    <div class="container mx-auto flex flex-col md:flex-row items-center  md:px-24 py-24 relative z-10">
      <!-- Text Section with Negative Margin to Move Up -->
      <div class="w-full md:w-1/2 p-6 md:p-12 flex justify-start bg-white bg-opacity-80 rounded-lg shadow-lg mt-20">
        <div class="max-w-md">
          <h1 class="text-2xl md:text-3xl font-bold mb-4 text-gray-800 leading-snug"> <!-- Adjusted text size and line height -->
            Turn complex modelling papers into simple Yellow<br>Curved Line briefs in 3 easy steps
          </h1>
          <p class="text-sm md:text-base mb-6 text-gray-700 leading-relaxed"> <!-- Adjusted text size -->
            Make complex modelling papers simple with Yellow Curved Line briefs in three easy steps.
          </p>
          <a href="#" class="inline-block px-6 py-3 bg-blue-500 hover:bg-blue-500 rounded-md transition duration-300">
            Get Started
          </a>
        </div>
      </div>
    </div>
  </div>


<section class="">
    <div class="flex items-center justify-center ">
         <div class="flex items-center justify-center w-24 h-24 rounded-full bg-blue-500 text-white animate-bounce">
          <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 16.586l5.707-5.707a1 1 0 1 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L12 16.586z"/>
          </svg>
        </div>
    </div>

    
    <div class="h-auto lg:h-3/4 flex items-center justify-center mb-12 p-10 overflow-hidden relative bg-cover bg-center" style="background-image: url('/assets/book1.jpg');">
  <!-- Gradient Overlay for contrast -->
  <div class="absolute inset-0 bg-gradient-to-r from-gray-800 to-transparent opacity-80"></div>
  
  <div class="relative z-10 container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16 px-6 lg:px-12 max-w-6xl">
    <!-- Upload Form Section (Left Side) -->
    <div class="w-full lg:w-1/2 bg-white bg-opacity-90 p-6 rounded-lg shadow-xl border border-gray-200 flex flex-col items-center text-center">
      <!-- Section Title -->
      <h2 class="text-3xl lg:text-3xl font-bold text-blue-500 mb-4 flex items-center gap-3">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-8 lg:h-10 w-8 lg:w-10 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1M12 12v9m-7-7l7-7 7 7" />
        </svg>
        Upload Your Papers
      </h2>

      <!-- Redesigned File Input -->
      <label class="w-full p-5 border-2 border-dashed border-blue-400 rounded-lg flex flex-col items-center justify-center cursor-pointer bg-blue-50 hover:bg-blue-100 transition duration-300 transform hover:scale-105 mb-4">
        <div class="flex flex-col items-center">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-14 lg:h-16 w-14 lg:w-16 text-blue-500 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
          </svg>
          <span class="text-gray-600 font-medium text-sm">Click or Drag & Drop to Upload</span>
        </div>
        <input type="file" class="hidden" />
      </label>

      <!-- Additional Info & Upload Button -->
      <p class="text-xs text-gray-500 mt-2">Accepted format:  PDF </p>
      <button class="w-full mt-4 px-5 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full font-semibold shadow-md transform transition duration-300 ease-in-out hover:scale-105">
        Upload File
      </button>
    </div>

    <!-- Expanded Image Section (Right Side) -->
    <div class="w-full lg:w-1/2 flex items-center justify-center">
      <div class="rounded-xl shadow-xl overflow-hidden w-full">
        <img src="/assets/bookniy.jpg" alt="Document Preview" class="w-full h-64 object-cover transform hover:scale-105 transition duration-300 ease-in-out" />
      </div>
    </div>
  </div>
</div>



<div class="relative bg-cover mb-12 bg-center h-[65vh] flex items-center justify-center" style="background-image: url('');">
  <!-- Overlay -->
  <div class="absolute inset-0 bg-black opacity-50"></div>
  <div class="absolute inset-0 h-full w-full">
      <img src="/assets/book5.jpg" alt="Background Image" class="w-full h-full object-cover opacity-30" />
    </div>
  <!-- Content Container -->
  <div class="relative bg-white bg-opacity-90 rounded-xl shadow-lg p-8 max-w-md w-full text-center">
    <!-- Heading -->
    <h2 class="text-2xl font-bold text-blue-700 mb-6">Select Your Brief</h2>
    
    
    <!-- Dropzone -->
    <form @submit.prevent="uploadFile" class="space-y-4">
      <div
        @drop.prevent="handleDrop"
        @dragover.prevent="handleDragOver"
        class="border-2 border-dashed border-blue-500 rounded-lg p-6 transition hover:bg-blue-50"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-blue-500 mb-2 mx-auto" fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.707 9.293a1 1 0 00-1.414 0L11 13.586V7a1 1 0 10-2 0v6.586l-4.293-4.293a1 1 0 10-1.414 1.414l5 5a1 1 0 001.414 0l5-5a1 1 0 000-1.414z" />
        </svg>
        <p class="text-blue-500 font-semibold">Upload a journal PDF and generate summaries tailored to specific audiences.</p>
        <input type="file" ref="fileInput" class="hidden" @change="onFileChange" />
      </div>
      
      <!-- Audience Selection -->
      <div class="grid grid-cols-2 gap-4 mt-6">
        <button @click.prevent="triggerFileInput" class="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Donors</button>
        <button @click.prevent="triggerFileInput" class="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Academics</button>
        <button @click.prevent="triggerFileInput" class="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Public</button>
        <button @click.prevent="triggerFileInput" class="bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">Decision Makers</button>
      </div>
      
      <!-- Selected File -->
      <p v-if="selectedFile" class="mt-4 text-gray-700 font-medium">
        Selected: <span class="font-semibold">{{ selectedFile.name }}</span>
      </p>
      
      <!-- Submit Button -->
      <button type="submit" class="mt-4 bg-blue-600 text-white py-3 rounded-lg w-full font-semibold hover:bg-blue-700 transition">
        Generate Brief
      </button>
    </form>
  </div>
</div>








<div class="relative bg-gray-700">
  <!-- Background Image -->
  <div class="absolute inset-0">
    <img src="/assets/book6.jpg" alt="Background Image" class="w-full h-full object-cover" />
  </div>

  <div class="container mx-auto px-4 lg:px-8 py-16 relative flex flex-col lg:flex-row">
    <!-- Right Form Section -->
    <div class="lg:w-1/2 flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg relative z-10 mx-4 lg:mx-8">
      <h2 class="text-4xl font-bold text-center text-blue-500 mb-8">Generate Your Brief</h2>
      <form @submit.prevent="uploadFile" class="w-full">
        <!-- Dropzone -->
        <div
          @drop.prevent="handleDrop"
          @dragover.prevent="handleDragOver"
          class="flex flex-col items-center justify-center p-8 bg-gray-100 border-dashed border-4 border-gray-400 text-center rounded-lg cursor-pointer hover:bg-gray-200 transition"
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
            Generate Brief
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
              class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              General Brief
            </button>
            <button
              type="button"
              class="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Regenerate
            </button>
          </div>
          <!-- Write-up below the buttons -->
          <p class="mt-4 text-gray-700 text-center">
            Creates and updates concise summaries of articles, helping researchers quickly grasp key insights and findings with the aid of machine learning and natural language processing.
          </p>
        </div>
        <p v-if="selectedFile" class="mt-4 text-center text-gray-700">
          Selected file: {{ selectedFile.name }}
        </p>
        <button
          type="submit"
          class="bg-blue-600 w-full text-white mt-8 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          Upload File
        </button>
      </form>
    </div>
  </div>
</div>

<div class="overflow-hidden bg-gray-100 py-10">
  <div class="flex items-center space-x-8 animate-books-scroll">
    <!-- Additional content can go here -->
  </div>
</div>





<div class="relative bg-gray-700">
  <!-- Background Image -->
  <div class="absolute inset-0">
    <img src="/assets/book6.jpg" alt="Background Image" class="w-full h-full object-cover" />
  </div>

  <div class="container mx-auto px-4 lg:px-8 py-16 relative flex flex-col lg:flex-row">
    <!-- Left Image Section -->
    <div class="flex-shrink-0 lg:w-1/2 relative group">
  <img src="/assets/book4.jpg" alt="Left Image" class="w-full h-full object-cover transition-opacity duration-300 ease-in-out" />

  <!-- Overlay with Text -->
  <div class="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
    <div class="text-center text-white p-4">
      <h3 class="text-2xl font-bold mb-2">Generate Your Brief</h3>
      <p class="text-lg">Transform your ideas into compelling narratives.</p>
    </div>
  </div>
</div>

    <!-- Right Form Section -->
    <div class="lg:w-1/2 flex flex-col justify-center items-center bg-white p-8 rounded-lg shadow-lg relative z-10 mx-4 lg:mx-8">
      <h2 class="text-4xl font-bold text-center text-blue-500 mb-8">Generate Your Brief</h2>
      <form @submit.prevent="uploadFile" class="w-full">
        <!-- Dropzone -->
        <div
          @drop.prevent="handleDrop"
          @dragover.prevent="handleDragOver"
          class="flex flex-col items-center justify-center p-8 bg-gray-100 border-dashed border-4 border-gray-400 text-center rounded-lg cursor-pointer hover:bg-gray-200 transition"
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
          <p class="text-gray-900 mb-2">Generate Brief</p>
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
              class="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              General Brief
            </button>
            <button
              type="button"
              class="bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition"
            >
              Regenerate
            </button>
          </div>
          <!-- Write-up below the buttons -->
          <p class="mt-4 text-gray-700 text-center">
            Helping Researchers quickly grasp key insights and findings.
          </p>
        </div>
        <p v-if="selectedFile" class="mt-4 text-center text-gray-700">
          Selected file: {{ selectedFile.name }}
        </p>
        <button
          type="submit"
          class="bg-blue-600 w-full text-white mt-8 px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          Upload File
        </button>
      </form>
      <!-- Additional Image Section -->
      <div class="flex-shrink-0 w-full mt-4">
        
      </div>
    </div>
  </div>
</div>

<div class="overflow-hidden bg-gray-100 py-10">
  <div class="flex items-center space-x-8 animate-books-scroll">
    <!-- Additional content can go here -->
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
