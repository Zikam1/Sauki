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
        <i class="fas fa-upload text-xs text-gray-400 mr-2"></i>
        <!-- Drag and Drop Text -->
        <p class="text-xs text-gray-400">Drag and Drop the file here</p>

        <!-- Or Text -->
        <p class="text-xs text-gray-400">Or</p>

        <!-- Click Here Link -->
        <p class="text-xs text-yellow-500 font-semibold cursor-pointer" @click="triggerFileInput">click here</p>

        <!-- Browse Gallery Text -->
        <p class="text-xs text-gray-400">to browse Gallery</p>

        <!-- Hidden File Input -->
        <input type="file" class="hidden" ref="fileInput" @change="handleFileUpload" />
      </div>

      <!-- Display Uploaded File -->
      <div v-if="uploadedFile" class="flex items-center mt-4">
        <p class="text-gray-300">Uploaded File: {{ uploadedFile.name }}</p>
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
            <p class="font-medium text-gray-700 text-sm">Academics</p>
          </div>

          <!-- General Public -->
          <div @click="selectBriefType('General Public')" class="bg-white border border-gray-300 p-3 sm:p-5 rounded-lg shadow-md hover:bg-gray-50 cursor-pointer text-center">
            <svg class="inline-block mr-2 text-gray-700" width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
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

      <!-- Generated Summary Section -->
      <div v-if="summary" class="w-full border-2 border-gray-300 rounded-lg p-4 mt-8 mb-4 bg-gray-900">
        <p class="text-lg text-gray-100">{{ summary }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      uploadedFile: null,
      briefType: null,
      summary: null,
      isLightTheme: true, // Default theme is light
    };
  },
  methods: {
    toggleTheme() {
      this.isLightTheme = !this.isLightTheme;
      document.body.classList.toggle('dark', !this.isLightTheme);
    },
    triggerFileInput() {
      this.$refs.fileInput.click();
    },
    handleFileUpload(event) {
      const file = event.target.files[0];
      if (file && file.type === 'application/pdf') {
        this.uploadedFile = file;
        this.generateSummary();
      } else {
        alert('Please upload a PDF file.');
      }
    },
    generateSummary() {
      setTimeout(() => {
        this.summary = "Your paper is being processed..."; // Placeholder
        setTimeout(() => {
          this.summary = "Your summary will be shown here.";
        }, 2000);
      }, 2000);
    },
    selectBriefType(type) {
      const briefSummaries = {
        Donors: "This is a summary for Donors.",
        Academics: "This is a summary for Academics.",
        "General Public": "This is a summary for the General Public.",
        "Decision Makers": "This is a summary for Decision Makers.",
      };
      this.summary = briefSummaries[type] || "No summary available.";
    }
  }
};
</script>

<style scoped>
.bg-saukiBlue {
  background-color: #3b82f6; /* Custom blue color for your theme */
}
</style>
