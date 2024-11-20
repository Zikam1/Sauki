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
        <div class="flex items-center space-x-4 mb-16">
          <!-- Moon and Star Icon Toggle -->
          <button 
            @click="toggleTheme" 
            class="text-white focus:outline-none ml-4"
            :class="{'text-black': isLightTheme, 'text-white': !isLightTheme}" 
            aria-label="Toggle theme"
          >
            <!-- Moon and Star Icon -->
            <svg v-if="isLightTheme" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
              <path d="M12 8v8l5-4z" />
            </svg>
            <svg v-else width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zm0 10V3l7 4.5-7 4.5zm0 4.5l7-4.5-7-4.5z" />
            </svg>
          </button>
        </div>
      </div>
    </header>

    <!-- Title Section -->
    <section>
      <div class="text-left mx-16 max-w-full mb-4">
        <p class="text-xl font-bold text-gray-300">Let's Make a Brief</p>
      </div>
    </section>

    <!-- Select File Section (with border) -->
    <div class="flex flex-col items-start justify-start bg-black bg-opacity-96 border-2 border-gray-900 rounded-lg w-full p-4 sm:p-8 mb-6 mx-auto">
      <div class="text-left mx-4 max-w-full mb-4">
        <p class="text-lg font-semibold text-gray-300">Upload Your Paper</p>
      </div>

      <!-- File Upload Instructions -->
      <div class="flex flex-col sm:flex-row items-center border border-gray-900 rounded-lg p-3 mb-4 space-y-1 sm:space-y-0 sm:space-x-2">
        <!-- Upload Icon -->
        <i class="fas fa-upload text-lg text-white mr-2"></i>
        <!-- Drag and Drop Text -->
        <p class="text-md text-gray-400">Drag and Drop the file here</p>

        <!-- Or Text -->
        <p class="text-md text-gray-400">Or</p>

        <!-- Click Here Link -->
        <p class="text-md text-yellowc font-semibold cursor-pointer" @click="triggerFileInput">click here</p>

        <!-- Browse Gallery Text -->
        <p class="text-md text-gray-400">to browse Gallery .</p>

        <!-- Hidden File Input -->
        <input type="file" class="hidden" ref="fileInput" @change="handleFileUpload" />
     

      <div v-if="uploadedFile" class="flex items-center mt-4 px-8 py-3 border border-gray-700 rounded-lg space-x-3 justify-between">
  <!-- PDF Icon -->
  <svg v-if="uploadedFile && uploadedFile.name.endsWith('.pdf')" class="h-5 w-5 bg-white text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M16 2H4C2.9 2 2 2.9 2 4v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8l-6-6zm0 18H4V4h12v4h4v12z" />
  </svg>
  
  <!-- Uploaded File Name -->
  <p class="text-saukiBlue text-sm flex-1">{{ uploadedFile.name }}</p>

  <!-- Close Button -->
  <button @click="uploadedFile = null" class="text-white hover:text-gray-600">
    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M6 18L18 6M6 6l12 12" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  </button>
</div> 
</div>

      <!-- Title for Brief Type Selection -->
      <div class="text-left mx-4 mb-4">
        <p class="text-lg sans-serif font-semibold text-gray-300 mb-4">Select Your Brief Type:</p>
        <p class="text-md sans-serif text-gray-400 mb-1">Upload your academic paper and generate summaries tailored to specific audiences.</p>
        <p class="text-md sans-serif text-gray-400">This can take up to 90 seconds.</p>
      </div>

      <!-- Brief Type Selection with Border -->
      <div class="w-full border-gray-300  rounded-lg p-3 sm:p-5">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
  <!-- Donors -->
  <div 
    @click="selectBriefType('Donors')" 
    :class="{'bg-saukiBlue': selectedBriefType === 'Supporters', 'bg-white': selectedBriefType !== 'Supporters'}" 
    class="border border-gray-300 p-3 sm:p-5 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer text-center flex justify-center items-center space-x-6"
  >
    <!-- SVG Icon with margin-right to create space between logo and text -->
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-white mr-2">
      <path d="M12 1v22m-7-7h14M8 10h8"></path>
    </svg>
    
    <!-- Text to the right of the SVG -->
    <p class="font-medium text-white text-sm">Donors</p>
  </div>


          <!-- Academics -->
              <div 
                  @click="selectBriefType('Academics')" 
                  :class="{'bg-saukiBlue': selectedBriefType === 'Supporters', 'bg-white': selectedBriefType !== 'Supporters'}" 
                  class="border border-gray-300 p-3 sm:p-5 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer text-center flex justify-center items-center space-x-6"
                >
                <!-- SVG Icon on the left side -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-white">
                <path d="M12 2l4 4-4 4-4-4z"></path>
                <path d="M12 2v6M12 12v6M3 18h18"></path>
              </svg>
                
                <!-- Text to the right of the SVG -->
                <p class="font-medium text-white text-sm">Academics</p>
              </div>

          <!-- General Public -->
              <div 
                  @click="selectBriefType('General Public')" 
                  :class="{'bg-saukiBlue': selectedBriefType === 'Supporters', 'bg-white': selectedBriefType !== 'Supporters'}" 
                  class="border border-gray-300 p-3 sm:p-5 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer text-center flex justify-center items-center space-x-6"
                >
                <!-- SVG Icon on the left side -->
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-white">
                  <circle cx="9" cy="7" r="4"></circle>
                  <circle cx="15" cy="7" r="4"></circle>
                  <path d="M5 17v-2a4 4 0 0 1 8 0v2m-8 0h8m-4 0v4"></path>
                </svg>
                <!-- Text to the right of the SVG -->
                <p class="font-medium text-white text-sm">General Public</p>
              </div>

          
                          <div 
                  @click="selectBriefType('Decision makers')" 
                  :class="{'bg-saukiBlue': selectedBriefType === 'Supporters', 'bg-white': selectedBriefType !== 'Supporters'}" 
                  class="border border-gray-300 p-3 sm:p-5 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer text-center flex justify-center items-center space-x-6"
                >
                <!-- SVG Icon on the left side -->
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 text-white">
  <!-- Person 1 (Head and Body) -->
                  <circle cx="7" cy="7" r="4"></circle>
                  <path d="M7 11v6m0 0h4m-4 0h-4m6 0v-6m6 0v6m0 0h-4m4 0h-4"></path>

                  <!-- Person 2 (Head and Body) -->
                  <circle cx="17" cy="7" r="4"></circle>
                  <path d="M17 11v6m0 0h-4m4 0h4"></path>
                </svg>
                
                <!-- Text to the right of the SVG -->
                <p class="font-medium text-white text-sm">Decision Makers</p>
              </div> 
        </div> 
        <button @click="showDataFunc" class="bg-blue-500 text-white px-4 py-2 mt-8 rounded">General Brief</button></div></div>
        <div class="flex flex-col items-start justify-start bg-black  bg-opacity-96 border-2  border-gray-900 rounded-lg w-full p-4 sm:p-8 mb-6 mx-auto">
          <nuxt-link to="/">
      <!-- Display JPEG Image Logo on the Left Edge -->
      <div class="relative">
        <img src="../assets/sauki-logo.png" alt="Logo" class="h-9 w-auto" />
        <!-- Blue dot beside the image -->
        <div v-if="showBlueDot" class="absolute  top-0 right-0 w-3 h-3 bg-blue-500 rounded-full"></div>
      </div>
    </nuxt-link>

      <div v-show="loading" class="text-white  Plus Jakarta Sans'">Loading....</div>
      <div v-show="showData" v-html="summary.data" class="sans-serif text-white" />
    </div>
    <div>
    <div v-if="isVisible" v-html="data" class="mt-4 p-2 border rounded"></div>
  </div>
</div>
    
 
</template>

<script setup>
import { ref } from 'vue';
import data from "../dummy.json"

const isVisible = ref(false);
// const data = ref('');

const showData = ref(false)
const loading = ref(false)

const summary = ref(data)

const isLightTheme = ref(true);

const toggleTheme = () => {
  isLightTheme.value = !isLightTheme.value;

  const summary = handleSubmit(async ({ donor, academic, Generalpublic, Decision }) => {
  try {
    const formData = new FormData()
    const data = { donor, academic, Generalpublic, Decision}

    formData.append('data', JSON.stringify(data))
    formData.append('files.pitch', pitch)

    const { data: result }
      = await $fetch<StrapiOneResponse<StreetHack>>(`${BE}/streethacks`, { method: 'POST', body: formData })

    if (result.id)
      await $fetch(`/emails/streethack/${result.id}`)

    resetForm()
    successful.value = true
    useTimeoutFn(() => {
      successful.value = false
    }, 6000)
  }
  catch (error) {
    console.log(error)
  }
})
};

function showDataFunc() {
  loading.value = true
  setTimeout(()=> {
    loading.value = false
    showData.value = true
  }, 3000)
};

const selectedBriefType = ref('');

// Handle File Upload
const uploadedFile = ref(null);
const fileInput = ref(null);

const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    uploadedFile.value = file;
  }
};

const selectBriefType = (type) => {
  selectedBriefType.value = type;
};
</script>

<style scoped>
/* Additional styling for the hover and active state effects */
.bg-blue-500 {
  background-color: #048ABF; /* Tailwind CSS Blue */
}

.text-white {
  color: white;
}

.bg-white {
  background-color: black;
}

.cursor-pointer {
  cursor: pointer;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hover\:bg-gray-50:hover {
  background-color: #048ABF;
}
</style>
