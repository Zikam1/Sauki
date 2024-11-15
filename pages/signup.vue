<template>
  <div class="flex items-center justify-center min-h-screen bg-black bg-opacity-96">
    <div class="p-8 rounded-lg shadow-lg w-full max-w-md">
      <!-- Heading -->
      <h2 class="text-2xl font-semibold text-center text-white mb-6">
        Let's get you started with a simple registration
      </h2>

      <!-- Registration Form -->
      <form @submit.prevent="handleSubmit">
        <!-- Email, Password, and Confirm Password inputs here -->

        <!-- Create Account Button -->
        <div class="pb-5 mb-4">
          <button
            type="submit"
            class="w-full py-2 bg-saukiBlue text-white font-semibold rounded-lg shadow-md hover:bg-saukiBlue focus:outline-none focus:ring-2 focus:bg-saukiBlue"
          >
            Create Account
          </button>
        </div>
      </form>

      <!-- Google Sign-In Button -->
      <button
        @click="signInWithGoogleHandler"
        class="w-full py-2 bg-white text-black font-semibold rounded-lg shadow-md hover:bg-gray-200 flex items-center justify-center gap-2"
      >
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google Icon" class="h-5 w-5" />
        Sign in with Google
      </button>

      <!-- Already have an account? Log In Link -->
      <p class="text-sm text-gray-600 mt-4">
        Already have an account?
        <nuxt-link to="/login" class="text-yellow-500 hover:text-yellow-500 font-semibold">Log In</nuxt-link>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { signInWithGoogle } from '~/firebase' // Ensure the path is correct
import { useRouter } from 'vue-router' // Import router composable

const email = ref('')
const password = ref('')
const confirmPassword = ref('')
const showPassword = ref(false)
const showConfirmPassword = ref(false)
const router = useRouter() // Initialize router

const handleSubmit = () => {
  console.log('Form submitted:', { email: email.value, password: password.value, confirmPassword: confirmPassword.value })
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const toggleConfirmPassword = () => {
  showConfirmPassword.value = !showConfirmPassword.value
}

// Function to handle Google Sign-In
const signInWithGoogleHandler = async () => {
  try {
    const user = await signInWithGoogle()
    console.log('Google Sign-In successful:', user)
    router.push('/brief-generator') // Redirect to brief-generator page
  } catch (error) {
    console.error("Google Sign-In Error:", error)
  }
}
</script>
