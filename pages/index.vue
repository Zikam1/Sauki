<template>
<div class="relative flex items-center justify-center w-full min-h-screen overflow-hidden">
    <!-- Background Overlay -->
    <div class="absolute inset-0 bg-black bg-opacity-95"></div>

    <div class="container mx-auto flex items-center justify-center relative z-10" style="padding-top: 12%; padding-bottom: 10%;">
        <!-- Centered Text Section with Responsive Width and Yellow Underline on "simple Yellow" -->
        <div class="text-center w-full px-12 md:w-5/6 lg:w-4/5">
            <h1 class="text-5xl md:text-5xl font-bold text-white leading-tight" style="line-height: 1.5;">
                Turn complex modelling papers into 
                <span class="relative inline-block">
                    <span class="text-white"></span>
                    <!-- First underline only under "simple" -->
                    
                </span>
                <span class="block mt-2">Simple Curved Line briefs in 3 easy steps</span>
            </h1>
        </div>
    </div>
</div>

<section class="bg-black bg-opacity-95">
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
  <div class="w-full lg:w-4/5 flex flex-col lg:flex-row items-center gap-4 relative mt-12 lg:mt-16">
    
    <!-- Step Label (Left Side) -->
    <div class="flex-shrink-0 flex items-center justify-center text-center mb-4 lg:mb-0">
      <span class="text-white px-6 py-2 rounded-full font-semibold text-lg md:text-xl lg:text-3xl xl:text-4xl">
        Step 1
      </span>
    </div>
    
    <!-- Upload Form (Right Side - Spanning Wider) -->
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
            <span class="text-blue-400">Drag and drop file here</span> or <span class="text-yellow-500 font-bold">click Here</span> to browse Gallery
          </span>
        </div>
        <input type="file" class="hidden" />
      </label>

      <!-- Additional Info & Upload Button -->
      <p class="text-xs md:text-sm text-gray-900 mt-2">Accepted format: PDF</p>
      
      <button class="w-full mt-4 px-5 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold shadow-md transform transition duration-300 ease-in-out hover:scale-105">
        Upload Your Paper
      </button>
    </div>
  </div>
</div>




<section class=" bg-opacity-95">
  <div class="relative z-10 container mx-auto flex flex-col items-center gap-8 pb-48 px-6 lg:px-12 max-w-6xl">
  <!-- Upload Form Section with Step Label -->
  <div class="w-full lg:w-4/5 flex flex-col lg:flex-row items-center gap-4 relative mt-12 lg:mt-16">
    
    <!-- Step Label (Left Side) -->
    <div class="flex-shrink-0 flex items-center justify-center text-center mb-4 lg:mb-0">
      <span class="text-white px-6 py-2 rounded-full font-semibold text-lg md:text-xl lg:text-3xl xl:text-4xl">
        Step 2
      </span>
    </div>
    
    <!-- Upload Form (Right Side - Spanning Wider) -->
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
          <span class="text-gray-600 font-medium text-sm md:text-base lg:text-lg">
            <span class="text-blue-500"><span class="text-gray-600 font-medium text-sm md:text-base ">
            <span class="text-blue-500"> Upload a journal PDF and generate summaries tailored to specific audiences</span>
          </span></span>
          </span>
        </div>
        <input type="file" class="hidden" />
      </label>

      <!-- Additional Info & Upload Button -->
      <p class="text-sm md:text-sm text-gray-900 mt-2 text-left">Select your Brief Type :</p>
      <div class="flex flex-wrap lg:flex-nowrap justify-center gap-4 mt-6 pb-6 w-full">
        <button @click.prevent="triggerFileInput" class="flex-grow bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition transform hover:scale-105">Donors</button>
        <button @click.prevent="triggerFileInput" class="flex-grow bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition transform hover:scale-105">Academics</button>
        <button @click.prevent="triggerFileInput" class="flex-grow bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition transform hover:scale-105">Public</button>
        <button @click.prevent="triggerFileInput" class="flex-grow bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition transform hover:scale-105">Decision Makers</button>
      </div>
      
      <button class="w-full mt-4 px-5  py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full font-semibold shadow-md transform transition duration-300 ease-in-out hover:scale-105">
       Brief Selection
      </button>
    </div>
  </div>
</div>
</section>



<section class=" bg-opacity-95">
  <div class="relative z-10 container mx-auto flex flex-col items-center gap-8 pb-48 px-6 lg:px-12 max-w-6xl">
  <!-- Upload Form Section with Step Label -->
  <div class="w-full lg:w-4/5 flex flex-col lg:flex-row items-center gap-4 relative mt-12 lg:mt-16">
    
    <!-- Step Label (Left Side) -->
    <div class="flex-shrink-0 flex items-center justify-center text-center mb-4 lg:mb-0">
      <span class="text-white px-6 py-2 rounded-full font-semibold text-lg md:text-xl lg:text-3xl xl:text-4xl">
        Step 3
      </span>
    </div>
    
    <!-- Upload Form (Right Side - Spanning Wider) -->
    <div class="w-full bg-white bg-opacity-90 p-6 rounded-lg shadow-xl border border-gray-200 flex flex-col items-center text-center">
      <!-- Outer Upload Title - Positioned outside the form container -->
      <h2 class="absolute top-[-80px] text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-yellow-500 flex items-center gap-3">
        Generate Your Brief
      </h2>

      <!-- Redesigned File Input -->
      <div class="w-full bg-white bg-opacity-10 p-6 rounded-lg shadow-xl flex flex-col items-start text-left">
        <!-- Generate Buttons -->
        <div class="flex gap-4 mb-4">
          <button class="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition transform hover:scale-105">
            Generate Brief
          </button>
          <button class="bg-gray-900 text-white py-2 px-6 rounded-lg hover:bg-gray-900 transition transform hover:scale-105">
            Regenerate
          </button>
        </div>
        
        <!-- Logo and Link -->
        <nuxt-link to="/">
          <img src="/assets/sauki-logo.png" alt="Sauki Logo" class="h-7 w-auto mb-4" />
        </nuxt-link>
        
        <!-- Description about Sauki -->
        <div class="mt-6">
          <p class="text-sm text-gray-700">
            Sauki is a comprehensive tool designed to help individuals and organizations generate tailored briefs from journal papers. With its intuitive interface, Sauki makes it easy to upload your PDF and select the appropriate audience for the generated brief. Whether you're targeting donors, academics, the public, or decision makers, Sauki ensures that your summaries are clear, concise, and impactful.
          </p>
        </div>
    </div>
  </div>
</div>
</div>
</section>


<div class="flex justify-center items-center ">
  <p class="text-5xl font-bold text-white">Ready ?</p>
</div>
<div class="flex justify-center items-center pb-24 mt-8">
  <NuxtLink to="/login">
    <button class="bg-blue-500 hover:bg-blue-600 text-white font-semibold w-48 h-12 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
      Let's Simplify
    </button>
  </NuxtLink>
</div>


<div class="flex justify-center  bg-opacity-95 items-center py-8">
  <p class="text-5xl font-bold text-yellow-500">FAQ</p>
</div>

<div class="container mx-auto p-6 max-w-4xl">
    <div v-for="(question, index) in questions" :key="index" class="mb-6">
      <!-- Question Text and Toggle Icon -->
      <div class="flex justify-between items-center border-b border-gray-700 pb-4">
        <span class="text-xl font-semibold text-white px-2">{{ question.text }}</span>
        <button @click="toggleAnswer(index)" class="text-yellow-500 text-xl font-semibold px-2 focus:outline-none">
          {{ question.isOpen ? 'x' : '+' }}
        </button>
      </div>

      <!-- Conditional Answer Text -->
      <p v-if="question.isOpen" class="mt-3 text-gray-500 px-2">
        {{ question.answer }}
      </p>
    </div>
  </div>
















    

  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const questions = reactive([
  
  { text: 'What does “Sauki” mean?', answer: 'Sauki means "simple" in the Hausa language spoken by millions across West Africa, embodying our mission to simplify complex modeling and science communication.', isOpen: false },
  { text: 'What problem does Sauki.ai solve?', answer: 'Sauki.ai contributes meaningfully to addressing Africa’s public health challenges by making insights from technical academic papers easy to understand for every audience, from decision-makers to academia, from journalists to the public. The tool harnesses the power of artificial intelligence (AI) to generate tailored briefs from academic modeling studies for various stakeholders.', isOpen: false },
  { text: "Wonderful! Who's building Sauki?", answer: 'Sauki.ai is a product belonging to Corona Management Systems (CMS), with funding from the Bill and Melinda Gates Foundation.', isOpen: false },
  { text: 'How do I use Sauki.ai?', answer: 'With Sauki.ai, you can upload an academic paper and generate a structured brief that captures the paper’s most important insights. The different categories provided by our brief generator allow you to generate these insights at various levels of complexity, in terms of technical language and intended audience.', isOpen: false },
  { text: 'Great! What kind of academic papers can I upload on Sauki.ai?', answer: 'You can upload any academic paper, though Sauki.ai focuses on health and related fields.', isOpen: false },
  { text: 'Will Sauki.ai generate briefs for papers that are not public health-focused, or papers that do not use modeling?', answer: 'Yes. However, because the tool was not trained to generate briefs on these other kinds of papers, there may be some quality issues with these non-public health-focused briefs that do not have models. For example, the tool might not be as useful with generating simplified briefs for non-technical audiences, may not be as effective at identifying methodology or key findings, or may not be as helpful with communicating nuanced insights.', isOpen: false },
  { text: 'How did you arrive at the template?', answer: 'Our brief template includes subsections that are typical of most academic papers. By keeping to a set template of typical categories, we ensure responsible AI use that reproduces content faithful to the paper you have uploaded. We are careful to not include subheadings that may be found in some papers but not in others.', isOpen: false },
  { text: 'How does Sauki model responsible AI practices?', answer: 'Sauki does not attempt to make deductions from the paper, nor does it recontextualize insights from the paper. Our approach ensures that you can trust the content in the summaries to cover vital information you need from your paper, while letting you come to your own conclusions.', isOpen: false },
  { text: 'This is interesting! What else is CMS working on?', answer: 'CMS is an international Social Enterprise operating with the belief that committed individuals who have a passion for solving problems can, with the right tools, change the world. Check out CMS website here.', isOpen: false },
])

function toggleAnswer(index) {
  // Close all questions except the one clicked
  questions.forEach((question, i) => {
    question.isOpen = i === index ? !question.isOpen : false
  })
}

const selectedFile = ref(null)

const onFileChange = (event) => {
  selectedFile.value = event.target.files[0]
}

const triggerFileInput = () => {
  const fileInput = document.querySelector('input[type="file"]')
  if (fileInput) fileInput.click()
}

const handleDrop = (event) => {
  event.preventDefault()
  selectedFile.value = event.dataTransfer.files[0]
}

const handleDragOver = (event) => {
  event.preventDefault()
}

const uploadFile = () => {
  if (selectedFile.value) {
    console.log('File uploading:', selectedFile.value)
    // File upload logic goes here
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
