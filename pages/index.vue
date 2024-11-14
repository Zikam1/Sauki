<template> 
<div class="relative flex items-center justify-center w-full min-h-screen overflow-hidden font-sans">
  <!-- Background Image and Text Container -->
  <div class="absolute inset-0 bg-opacity-96 bg-cover bg-center flex items-center justify-center" style="background-image: url('/path/to/your/bgjpeg.jpg');">
    <div class="bg-black bg-opacity-96 absolute inset-0"></div> 

    <!-- Centered Content with negative margin to push up -->
    <div class="container mx-auto flex items-center justify-center relative z-10 px-4 md:px-8 text-center mt-[-2%] sm:mt-[-5%] md:mt-[-7%] lg:mt-[-8%]">
      <div class="w-full px-4 sm:px-8 md:w-5/6 lg:w-4/5">
        <h1 class="text-3xl sm:text-4xl md:text-7xl lg:text-6xl font-bold text-white leading-tight relative z-10">
          <!-- Keep "Turn complex modelling papers into" on the same line -->
          <span class="block sm:inline-block md:inline-block">Turn complex modelling papers into</span>

          <!-- Inline-flex container to keep "Simple" and following text in a line -->
          <div class="inline-flex flex-col items-center md:items-start mt-4 sm:mt-6 md:mt-8">
            <span class="text-yellowc px-1 inline-block relative z-20 text-4xl sm:text-5xl md:text-6xl">
              Simple
            </span>

            <!-- Underline image, centered beneath "Simple" -->
            <div class="relative mt-2 sm:mt-4">
              <img src="/assets/yellowcol.png" alt="Underline" class="h-4 sm:h-5 md:h-6 lg:h-8" />
            </div>
          </div>

          <span class="block sm:text-3xl md:text-5xl lg:text-6xl md:inline md:ml-2">briefs in 3 easy steps</span>
        </h1>
      </div>
    </div>
  </div>
  
  <!-- Centered Bouncing Arrow Section -->
  <div class="flex items-center justify-center absolute bottom-24 sm:bottom-28 md:bottom-32 lg:bottom-40 w-full">
    <div class="flex items-center justify-center w-16 h-16 rounded-full border-4 border-white text-white animate-bounce">
      <svg class="absolute w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19V6M5 12l7 7 7-7" />
      </svg>
    </div>
  </div>
</div>

<section class="bg-black bg-opacity-96">
  <!-- Form Section -->
  <div class="relative z-10 top-[-100px] container mx-auto flex flex-col items-center gap-8 pb-48 px-6 lg:px-12">
    <!-- Upload Form Section with Step Label -->
    <div class="w-full lg:w-4/5 flex flex-col lg:flex-row gap-4 relative mt-12 lg:mt-16 items-center">
      
      <!-- Step Label (Left Side) -->
      <div class="flex-shrink-0 flex items-center justify-start text-left w-full lg:w-1/5 mb-0">
        <span class="text-white px-4 py-1 rounded-full font-semibold text-2xl md:text-lg lg:text-xl xl:text-3xl">
          Step 1
        </span>
      </div>
      
      <!-- Image Section with Text on Top -->
      <div class="w-full lg:w-6/7 bg-black bg-opacity-95 p-6 rounded-lg shadow-xl border-4 border-black flex flex-col items-center text-center relative">
        <!-- Text on Top of Image with responsive positioning -->
        <span class="absolute top-[-20px] sm:top-[-10px] md:top-[-40px] left-1/2 transform -translate-x-1/2 text-yellowc font-bold text-2xl md:text-3xl lg:text-4xl whitespace-nowrap">
          Upload Your Paper
        </span>
        <!-- Updated Image Source -->
        <img src="../assets/ses.png" alt="Centered Image" class="w-full lg:w-[90%] h-auto rounded-lg shadow-lg mb-6">
      </div>
    </div>
  </div> 
</section>

<section class="bg-black bg-opacity-96">
  <!-- Form Section -->
  <div class="relative z-10 top-[-300px] container mx-auto flex flex-col items-center gap-8 pb-48 px-6 lg:px-12">
    <!-- Upload Form Section with Step Label -->
    <div class="w-full lg:w-4/5 flex flex-col lg:flex-row gap-4 relative mt-12 lg:mt-16 items-center">
      
      <!-- Step Label (Left Side) -->
      <div class="flex-shrink-0 flex items-center justify-start text-left w-full lg:w-1/5 mb-0">
        <span class="text-white px-4 py-1 rounded-full font-semibold text-2xl md:text-lg lg:text-xl xl:text-3xl">
          Step 2
        </span>
      </div>
      
      <!-- Image Section with Text on Top -->
      <div class="w-full lg:w-6/7 bg-black bg-opacity-95 p-6 rounded-lg shadow-xl border-4 border-black flex flex-col items-center text-center relative">
        <!-- Text on Top of Image with responsive positioning -->
        <span class="absolute top-[-20px] sm:top-[-10px] md:top-[-40px] left-1/2 transform -translate-x-1/2 text-yellowc font-bold text-2xl md:text-3xl lg:text-4xl whitespace-nowrap">
          Select Your Brief
        </span>
        <!-- Updated Image Source -->
        <img src="../assets/yt.PNG" alt="Centered Image" class="w-full lg:w-[90%] h-auto rounded-lg shadow-lg mb-6">
      </div>
    </div>
  </div> 
</section>


<section class="bg-black bg-opacity-96">
  <!-- Form Section -->
  <div class="relative z-10 top-[-500px] container mx-auto flex flex-col items-center gap-8 pb-48 px-6 lg:px-12">
    <!-- Upload Form Section with Step Label -->
    <div class="w-full lg:w-4/5 flex flex-col lg:flex-row gap-4 relative mt-12 lg:mt-16 items-center">
      
      <!-- Step Label (Left Side) -->
      <div class="flex-shrink-0 flex items-center justify-start text-left w-full lg:w-1/5 mb-0">
        <span class="text-white px-4 py-1 rounded-full font-semibold text-2xl md:text-lg lg:text-xl xl:text-3xl">
          Step 3
        </span>
      </div>
      
      <!-- Image Section with Text on Top -->
      <div class="w-full lg:w-6/7 bg-black bg-opacity-95 p-6 rounded-lg shadow-xl border-4 border-black flex flex-col items-center text-center relative">
        <!-- Text on Top of Image with responsive positioning -->
        <span class="absolute top-[-20px] sm:top-[-10px] md:top-[-40px] left-1/2 transform -translate-x-1/2 text-yellowc font-bold text-2xl md:text-3xl lg:text-4xl whitespace-nowrap">
          Generate Your Brief
        </span>
        <!-- Updated Image Source -->
        <img src="../assets/iu.PNG" alt="Centered Image" class="w-full lg:w-[90%] h-auto rounded-lg shadow-lg mb-6">
      </div>
    </div>
  </div> 
</section>

<section class="bg-black bg-opacity-96">

  <!-- Move Ready? and Let's Simplify even higher -->
  <div class="flex justify-center items-center mt-[-600px]"> <!-- Increased negative margin-top to move up further -->
  <p class="text-4xl pb-4 font-bold text-white">Ready ?</p>
</div>
<div class="flex justify-center items-center mt-2 pb-16"> <!-- Reduced margin-top and padding-bottom further -->
  <NuxtLink to="/login">
    <button class="bg-saukiBlue hover:bg-saukiBlue text-white font-semibold w-48 h-12 rounded-lg shadow-lg transition duration-300 transform hover:scale-105">
      Let's Simplify
    </button>
  </NuxtLink>
</div>


<div class="flex justify-center  bg-opacity-95 items-center py-8">
  <p class="text-5xl font-bold text-yellowc">FAQ</p>
</div>

<div class="container mx-auto p-6 max-w-4xl font-sans">
  <div v-for="(question, index) in questions" :key="index" class="mb-6">
    <!-- Question Text and Toggle Icon -->
    <div @click="toggleAnswer(index)" class="flex justify-between items-center border-b border-gray-700 pb-4 cursor-pointer">
      <span class="text-xl font-semibold text-white px-2">{{ question.text }}</span>
      <button class="text-yellowc text-xl font-semibold px-2 focus:outline-none">
        {{ question.isOpen ? 'x' : '+' }}
      </button>
    </div>

    <!-- Conditional Answer Text -->
    <p v-if="question.isOpen" class="mt-3 text-gray-400 px-2 font-semibold">
  {{ question.answer }} 
  <!-- Check if a link exists and add a clickable URL -->
  <span v-if="question.link">
    <a :href="question.link" target="_blank" class="text-saukiBlue text-sm hover:underline">
      CMS website
    </a>
  </span>
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
  { text: 'Great! What kind of academic papers can I upload on Sauki.ai?', answer: 'Sauki.ai was designed  specifically for academic research papers that focus on public health and use modelling.', isOpen: false },
  { text: 'Will Sauki.ai generate briefs for papers that are not public health-focused, or papers that do not use modeling?', answer: 'Yes. However, because the tool was not trained to generate briefs on these other kinds of papers, there may be some quality issues with these non-public health-focused briefs that do not have models. For example, the tool might not be as useful with generating simplified briefs for non-technical audiences, may not be as effective at identifying methodology or key findings, or may not be as helpful with communicating nuanced insights.', isOpen: false },
  { text: 'How did you arrive at the template?', answer: 'Our brief template includes subsections that are typical of most academic papers. By keeping to a set template of typical categories, we ensure responsible AI use that reproduces content faithful to the paper you have uploaded. We are careful to not include subheadings that may be found in some papers but not in others.', isOpen: false },
  { text: 'How does Sauki model responsible AI practices?', answer: 'Sauki does not attempt to make deductions from the paper, nor does it recontextualize insights from the paper. Our approach ensures that you can trust the content in the summaries to cover vital information you need from your paper, while letting you come to your own conclusions.', isOpen: false },
  { text: 'This is interesting! What else is CMS working on?', answer: 'CMS is an international Social Enterprise operating with the belief that committed individuals who have a passion for solving problems can, with the right tools, change the world. Check out CMS website here.',link:'https://www.coronams.com/', isOpen: false },
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
