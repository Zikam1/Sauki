<template>
  <section class="min-h-screen bg-gray-100 text-gray-900">
    <!-- Hero Section -->
    <div class="bg-indigo-600 text-white py-20">
      <div class="container mx-auto px-12 md:px-36 text-center">
        <h1 class="text-4xl text-center font-bold mb-4">
          Turn complex modelling papers into simple Yellow</br> Curved Line briefs in 3 easy steps
        </h1>
        
      </div>
    </div>

    <!-- File Upload Section -->
    <div class="container mx-auto px-6 py-16">
      <h2 class="text-4xl font-bold text-center mb-8 ">Upload Your Paper</h2>
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
            <p class="text-gray-600 mb-2">
              Drag & drop your files here or click to browse
            </p>
            <input
              type="file"
              ref="fileInput"
              class="hidden"
              @change="onFileChange"
            />
            <button
              @click.prevent="triggerFileInput"
              class="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-indigo-500"
            >
              Browse Files
            </button>
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
            <p class="text-gray-600 mb-2">
              Drag & drop your files here or click to browse
            </p>
            <input
              type="file"
              ref="fileInput"
              class="hidden"
              @change="onFileChange"
            />
            <button
              @click.prevent="triggerFileInput"
              class="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-indigo-500"
            >
              Browse Files
            </button>
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
            <p class="text-gray-600 mb-2">
              Drag & drop your files here or click to browse
            </p>
            <input
              type="file"
              ref="fileInput"
              class="hidden"
              @change="onFileChange"
            />
            <button
              @click.prevent="triggerFileInput"
              class="bg-indigo-600 text-white px-4 py-2 mt-4 rounded-lg hover:bg-indigo-500"
            >
              Browse Files
            </button>
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
              Sauki means "simple" in the Hausa language spoken by millions across West Africa, embodies our mission to simplify complex modelling and science communication.
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
              Sauki.ai contributes meaningfully to addressing Africa's public health challenges by
               making insights from technical academic papers easy to understand for every audience, 
               from decision-makers to academia, from journalists to the public. The tool harnesses 
               the power of artificial intelligence (AI) to generate tailored briefs from academic
                modelling studies for various stakeholders.
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
/* Add any custom styling here */
</style>
