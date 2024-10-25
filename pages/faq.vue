<template>
    <div class="max-w-4xl mx-auto px-4 py-12">
      <h1 class="text-4xl font-bold text-center text-purple-600 mb-6">Frequently Asked Questions</h1>
      <p class="text-center text-gray-500 mb-12">
        Here are some common questions and answers to help you understand our services better.
      </p>
      
      <div class="space-y-4">
        <div v-for="(faq, index) in faqs" :key="index" class="bg-white rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
          <button 
            @click="toggle(index)" 
            class="flex justify-between items-center w-full px-6 py-5 text-left text-gray-800 font-semibold bg-gray-100 rounded-lg focus:outline-none hover:bg-gray-200 transition duration-200"
          >
            <span>{{ faq.question }}</span>
            <svg 
              :class="{'transform rotate-180': activeIndex === index}" 
              class="w-6 h-6 text-purple-600 transition duration-200" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 10l5 5 5-5H7z" />
            </svg>
          </button>
          <transition name="fade">
            <div v-if="activeIndex === index" class="px-8 py-4 border-t border-gray-300">
              <p class="text-gray-700">{{ faq.answer }}</p>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const faqs = [
    {
      question: "What does 'Sauki' mean?",
      answer: "Sauki means simple in the Hausa language spoken by millions across West Africa, embodies our mission to simplify complex modelling and science communication."
    },
    {
      question: "What problem does 'Sauki.ai' solve?",
      answer: "Sauki.ai contributes meaningfully to addressing Africa's public health challenges by making insights from technical academic papers easy to understand for every audience, from decision-makers to academia, from journalists to the public. The tool harnesses the power of artificial intelligence (AI) to generate tailored briefs from academic modelling studies for various stakeholders."
    },
    {
      question: "Wonderful! Who's building Sauki?",
      answer: "Sauki.ai is a product belonging to Corona Management Systems (CMS), with funding from Bill and Melinda Gates Foundation."
    },
    {
      question: "How do I use Sauki.ai?",
      answer: "With Sauki.ai, you can upload an academic paper and generate a structured brief that captures the papers' most important insights. The different categories provided by our brief generator will allow you to generate these insights at various levels of complexity in terms of technical language and intended audience."
    },
    {
      question: "Great! What kind of academic papers can I upload on Sauki.ai?",
      answer: "Sauki.ai was designed specifically for academic research papers that focus on public health and use modelling."
    },
    {
      question: "Will Sauki.ai generate briefs for papers that are not public health-focused, or papers that do not use modelling?",
      answer: "Yes. However, because the tool was not trained to generate briefs on these other kinds of papers, there may be some quality issues with these non-public health-focused briefs that do not have models. For example, the tool might not be as useful with generating simplified briefs for non-technical audiences, may not be as effective at identifying methodology or key findings, or may not be as helpful with communicating nuanced insights."
    },
    {
      question: "How did you arrive at the template?",
      answer: "Our brief template includes subsections that are typical of most academic papers. By keeping to a set template of typical categories, we ensure responsible AI use that reproduces content faithful to the paper you have uploaded. We are careful to not include subheadings that may be found in some papers but not in others."
    },
    {
      question: "How does Sauki model responsible AI practices?",
      answer: "Sauki does not attempt to make deductions from the paper, nor does it recontextualize insights from the paper. Our approach ensures that you can trust the content in the summaries to cover vital information you need from your paper, while letting you come to your own conclusions."
    },
    {
      question: "This is interesting! What else is CMS working on?",
      answer: "CMS is an international Social Enterprise operating with the belief that committed individuals who have a passion for solving problems can, with the right tools, change the world."
    }
  ];
  
  const activeIndex = ref(null);
  
  function toggle(index) {
    activeIndex.value = activeIndex.value === index ? null : index;
  }
  </script>
  
  <style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  </style>
  