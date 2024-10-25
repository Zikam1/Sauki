<template>
    <div class="min-h-screen bg-gray-100 flex items-center justify-center">
      <div class="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Upload Paper</h2>
  
        <form @submit.prevent="handleSubmit">
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="file">Upload Paper (PDF)</label>
            <input
              type="file"
              id="file"
              accept="application/pdf"
              @change="onFileChange"
              class="border border-gray-300 p-2 w-full"
              required
            />
          </div>
  
          <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="audience">Select Audience</label>
            <select
              id="audience"
              v-model="selectedAudience"
              class="border border-gray-300 p-2 w-full"
              required
            >
              <option value="" disabled>Select an audience</option>
              <option value="journal">Journal PDF</option>
              <option value="donors">Donors</option>
              <option value="academics">Academics</option>
              <option value="general-public">General Public</option>
              <option value="decision-makers">Decision Makers</option>
            </select>
          </div>
  
          <div class="mb-4">
            <button
              type="button"
              @click="generateBrief"
              class="bg-blue-500 text-white p-2 rounded w-full"
            >
              Generate Brief
            </button>
            <button
              type="button"
              @click="regenerateBrief"
              class="bg-gray-300 text-black p-2 rounded w-full mt-2"
            >
              Regenerate Brief
            </button>
          </div>
  
          <button type="submit" class="bg-green-500 text-white p-2 rounded w-full">
            Upload Paper
          </button>
        </form>
  
        <div v-if="brief" class="mt-6">
          <h3 class="text-xl font-bold">Generated Brief</h3>
          <p class="border border-gray-300 p-4 mt-2">{{ brief }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const selectedAudience = ref('');
  const file = ref(null);
  const brief = ref('');
  
  const onFileChange = (event) => {
    file.value = event.target.files[0];
  };
  
  const generateBrief = () => {
    // Simple placeholder logic for generating a brief
    brief.value = `This is a brief for the audience: ${selectedAudience.value}`;
  };
  
  const regenerateBrief = () => {
    // Clear the existing brief to regenerate
    brief.value = '';
  };
  
  const handleSubmit = () => {
    if (!file.value || !selectedAudience.value) {
      alert('Please upload a paper and select an audience.');
      return;
    }
  
    // Handle the file upload logic here
    console.log('Uploading paper:', file.value);
    console.log('Selected audience:', selectedAudience.value);
  
    // Simulate a successful upload and clear the form
    alert('Paper uploaded successfully!');
    file.value = null;
    selectedAudience.value = '';
    brief.value = '';
  };
  </script>
  
  <style scoped>
  /* Additional styles if needed */
  </style>
  