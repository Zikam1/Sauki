<template>
    <div class="flex  items-center justify-center  bg-gray-900">
      <!-- Initial Text with Border -->
      <div class="flex items-center space-x-4 mb-8">
        <div class="flex items-center">
          <div class="border-2 border-gray-400 bg-black text-white p-2 rounded-md">
            Do you like the brief we shared with you?
          </div>
        </div>
      </div>
  
      <!-- Thumbs-up and Thumbs-down buttons -->
      <div class="flex space-x-2 mb-8">
        <button 
          class="text-xl text-green-500 hover:text-green-700" 
          @click="redirectToFeedbackForm"
        >
          👍
        </button>
        <button 
          class="text-xl text-red-500 hover:text-red-700" 
          @click="redirectToFeedbackForm"
        >
          👎
        </button>
      </div>
  
      <!-- Feedback Form Popup (Initially Hidden) -->
      <div v-if="showForm" class="bg-gray-100 p-6 shadow-lg rounded-md w-80 h-80 flex items-center justify-center text-center">
        <div>
          <h2 class="text-lg font-semibold">Mind if we ask a few questions?</h2>
          <p class="mt-2 text-sm text-black">We promise, it's not much.</p>
        
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "FeedbackPage",
    data() {
      return {
        showForm: false, // Controls visibility of feedback form
        feedback: "", // Stores user feedback
      };
    },
    methods: {
      // Handle the thumbs-up or thumbs-down button click
      redirectToFeedbackForm() {
        this.showForm = true;
      },
      // Submit feedback (you can add further handling like sending data to the server)
      submitFeedback() {
        console.log("Feedback submitted:", this.feedback);
        this.feedback = ""; // Clear feedback
        this.showForm = false; // Hide the form after submission
      },
    },
  };
  </script>
  
  <style scoped>
  /* Custom styles can go here, for example, styling the feedback form */
  </style>
  





  