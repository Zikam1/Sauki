<template>
 <div class="relative flex flex-col min-h-screen bg-ty bg-opacity-96 px-4 sm:px-8 py-4">
  <header :class="headerClass">
    <div
      class="flex flex-col sm:flex-row items-center justify-between bg-white bg-opacity-96 border-t-2 border-b-2 border-ty rounded-lg p-2 sm:p-3 mb-6 mx-auto"
    >
      <!-- Logo Section (Left Edge) -->
      <div class="flex items-center">
        <nuxt-link to="/">
          <img src="../assets/sauki-logo.png" alt="Sauki Logo" class="h-9 w-auto" />
        </nuxt-link>
      </div>

      
      <div class="flex flex-wrap items-center gap-x-4 gap-y-4 mt-4 sm:mt-0 w-full sm:w-auto justify-center sm:justify-end" >
         <div class="flex items-center justify-center">
            <nuxt-link to="/">
                <div
              class="w-6 h-6 sm:w-12 sm:h-12 bg-sa text-white flex items-center justify-center rounded-full text-xl sm:text-xl font-bold"
            >
              IS
            </div>
          </nuxt-link>
        </div>

        <!-- Logout Button -->
        <div class="flex items-center space-x-2">
          <img src="../assets/icons/logout.svg" alt="Logout Icon" class="w-5 sm:w-6" />
          <nuxt-link
            to="/"
            class="text-raddy rounded-lg px-3 py-1 sm:px-4 sm:py-2 text-sm sm:text-base"
          >
            Logout
          </nuxt-link>
        </div>


<div>
        <img
    v-if="!uploadedFile"
    src="../assets/icons/bg-book.svg"
    alt="book"
    class="absolute right-0 top-[40%] transform -translate-y-1/2 opacity-40 pointer-events-none max-w-[20%] lg:max-w-[25%]"
  /></div>
      <!-- Check if the user is authenticated -->
      <div v-if="isAuthenticated">
        <nuxt-link :to="`/profile/${userName}`">
          <!-- Display the user's name inside a circle -->
          <div class="w-16 h-16 bg-saukiBlue text-white flex items-center justify-center rounded-full text-2xl font-bold">
            {{ userName }}
          </div>
        </nuxt-link>
      </div>     
    </div>
  </div>
</header>

  
    <section>
      <div class="text-left sm:mx-16 md:mx-24 max-w-full mb-8">
        <p class="text-[26px] font-bold text-white">Let's Make a Brief</p>
      </div>
    </section>

 
    <div class="flex flex-col items-start justify-start bg-ty bg-opacity-96 border-2 border-io rounded-lg w-11/12 sm:w-51/52 p-4 sm:p-8 mb-6 mx-auto">
      <!-- <img src="../assets/icons/bg-book.svg" alt="bg-books" class="ml-auto" /> -->
    <div class="text-left md:mx-4 max-w-full mb-4">
        <p class="text-md font-semibold text-white">Upload Your Paper</p>
    </div>

    <div class="flex flex-col sm:flex-row items-center border border-gray-900 rounded-lg p-3 md:mb-16 space-y-1 sm:space-y-0 sm:space-x-1 bg-white">
        <div class="upload-icon">
            <img v-if="!uploadedFile" src="../assets/icons/upload.svg" alt="upload" />
        </div>
        <p v-if="!uploadedFile" class="text-md text-wr">Drag and Drop the file here</p>
        <p v-if="!uploadedFile" class="text-sm text-wr"> Or </p>

        <p v-if="!uploadedFile" class="text-md text-yellowc cursor-pointer" @click="triggerFileInput">click here</p>
        <p v-if="!uploadedFile" class="text-md text-wr">to browse Gallery .</p>
        <input type="file" class="hidden" ref="fileInput" @change="handleFileUpload" />

        <div v-if="uploadedFile" class="flex items-center mt-4 px-6 py-3 border-gray-700 rounded-lg space-x-3 justify-between">
            <svg v-if="uploadedFile && uploadedFile.name.endsWith('.pdf')" class="h-5 w-5 bg-white text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M16 2H4C2.9 2 2 2.9 2 4v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8l-6-6zm0 18H4V4h12v4h4v12z" />
            </svg>
            <p class="text-saukiBlue text-sm flex-1">{{ uploadedFile.name }}</p>
            <p class="text-saukiBlue text-sm">{{ (uploadedFile.size / (1024 * 1024)).toFixed(2) }} MB</p>
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
        <p class="text-md font-['Plus Jakarta Sans'] text-md font-semibold text-white mb-4">Select Your Brief Type:</p>
        <p class="text-md font-['Plus Jakarta Sans'] text-wr mb-1">Upload your academic paper and generate summaries tailored to specific audiences.</p>
        <p class="text-md font-['Plus Jakarta Sans'] text-wr">This can take up to 90 seconds.</p>
    </div>

    <!-- Brief Type Selection with Border -->
    <div class="w-full border-ty rounded-lg p-3 sm:p-5">
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <!-- Donors -->
            <div @click="selectBriefType('Donors')" :class="{'bg-saukiBlue': selectedBriefType === 'Donors', 'bg-white': selectedBriefType !== 'Donors'}" class=" border border-gray-900 p-3 sm:p-5 rounded-lg text-sm shadow-md hover:bg-saukiBlue cursor-pointer text-center flex justify-center items-center space-x-6">
                <img src="../assets/icons/donors.svg" alt="donors" />
                <p class="font-medium text-white text-sm">Donors</p>
            </div>

            <div @click="selectBriefType('Academics')" :class="{'bg-saukiBlue': selectedBriefType === 'Academics', 'bg-white': selectedBriefType !== 'Academics'}" class="border border-gray-900 p-3 sm:p-5 rounded-lg text-sm shadow-md hover:bg-saukiBlue cursor-pointer text-center flex justify-center items-center space-x-6">
                <img src="../assets/icons/graduation-hat.svg" alt="graduation-hat" />
                <p class="font-medium text-white text-sm">Academics</p>
            </div>

            <div @click="selectBriefType('General Public')" :class="{'bg-saukiBlue': selectedBriefType === 'General Public', 'bg-white': selectedBriefType !== 'General Public'}" class="border border-gray-900 p-3 sm:p-5 rounded-lg shadow-md text-sm hover:bg-saukiBlue cursor-pointer text-center flex justify-center items-center space-x-6">
                <img src="../assets/icons/general-public.svg" alt="general-public" />
                <p class="font-medium text-white text-sm">General Public</p>
            </div>

            <div @click="selectBriefType('Decision makers')" :class="{'bg-saukiBlue': selectedBriefType === 'Decision makers', 'bg-white': selectedBriefType !== 'Decision makers'}" class="border border-gray-900 p-3 sm:p-5 rounded-lg shadow-md text-sm hover:bg-saukiBlue cursor-pointer text-center flex justify-center items-center space-x-6">
                <img src="../assets/icons/decision-maker.svg" alt="decision-maker" />
                <p class="font-medium text-white text-sm">Decision Makers</p>
            </div>
        </div>

        <button @click="selectBriefType('General Brief')" :class="{'bg-saukiBlue': uploadedFile, 'bg-ds': !uploadedFile}" class="text-white px-4 w-48 py-2 mt-8 rounded">
            General Brief
        </button>
    </div>
</div>

<div v-if="selectedBriefType === 'General Brief'" class="relative flex flex-col items-center justify-center bg-ty bg-opacity-96 border-2 border-io rounded-lg w-11/12 sm:w-51/52 p-4 sm:p-8 mb-6 mx-auto">
    <!-- Logo and Blinking Dot on the Left -->
    <div v-if="showLogo" class="absolute left-8 top-4 flex flex-col items-center gap-y-8 transition-opacity duration-500">
        <div class="flex items-center gap-x-2">
            <img src="../assets/sauki-logo.png" alt="Logo" class="h-6 w-auto" />
            <div class="w-2 h-2 bg-saukiBlue rounded-full animate-blink"></div>
        </div>
        <div v-show="loading" class="text-white">Loading....</div>
    </div>

    <!-- Centered Preloader GIF -->
    <div v-if="!showLogo && !showData && isPreloaderVisible" class="relative flex items-center justify-center pb-8">
        <img src="../assets/sauki-preloader-unscreen.gif" alt="Preloader GIF" class="h-12 w-auto" />
    </div>

    <!-- Display Summary Data -->
    <div v-if="showData" v-html="summary.data" class="['Plus Jakarta Sans'] text-wr md:mt-16 " />
</div>

<div>
    <div v-if="isVisible" v-html="data" class="mt-4 p-2 border rounded"></div>
</div></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import data from "../dummy.json";

// State Variables
const showData = ref(false);
const loading = ref(false);
const summary = ref(data);
const isLightTheme = ref(true);
const showBorder = ref(false);
const selectedBriefType = ref('');
const uploadedFile = ref(null);
const fileInput = ref(null);
const showLogo = ref(false); // Reactive state for logo visibility
const isPreloaderVisible = ref(false); // To control visibility of preloader

// Select a brief type and show the preloader and logo
function selectBriefType(type) {
  selectedBriefType.value = type;
  showData.value = false;  // Hide the data when a new type is selected
  loading.value = true;    // Show loading state
  showLogo.value = false; // Hide logo initially

  if (type === 'General Brief') {
    isPreloaderVisible.value = true; // Show preloader when "General Brief" is selected
    // Show preloader for 8 seconds, then show logo and data
    setTimeout(() => {
      showLogo.value = true; // Show logo after preloader
      loading.value = false; // Hide loading text
      showData.value = true; // Show summary data
      isPreloaderVisible.value = false; // Hide preloader after delay
    }, 8000); // 8 seconds delay to simulate loading
  }
}

// Theme Toggle
const toggleTheme = () => {
  isLightTheme.value = !isLightTheme.value;
};

// File Upload Logic
const triggerFileInput = () => {
  fileInput.value.click();
};

const handleFileUpload = (event) => {
  const file = event.target.files[0];
  if (file) {
    uploadedFile.value = file;
  }
};

// Example Form Submission Logic
const handleSubmit = async (formData) => {
  try {
    const { donor, academic, Generalpublic, Decision, pitch } = formData;

    const requestData = new FormData();
    requestData.append('data', JSON.stringify({ donor, academic, Generalpublic, Decision }));
    requestData.append('files.pitch', pitch);

    const response = await $fetch(`${BE}/streethacks`, {
      method: 'POST',
      body: requestData,
    });

    if (response.id) {
      await $fetch(`/emails/streethack/${response.id}`);
    }

    console.log('Form submitted successfully');
  } catch (error) {
    console.error('Error submitting form:', error);
  }
};

// Show logo after 10 seconds
onMounted(() => {
  setTimeout(() => {
    showLogo.value = true;
  }, 10000);
});
</script>


<style scoped>

.bg-blue-500 {
  background-color: #048ABF; /* Tailwind CSS Blue */
}

.text-white {
  color: white;
}

.bg-white {
  background-color: rgb(13,15,16);
}

.cursor-pointer {
  cursor: pointer;
}

.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.hover\:bg-gray-20:hover {
  background-color: #048ABF;
}
</style>
