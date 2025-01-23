<template>
  <div class="relative flex items-top justify-center min-h-screen bg-gray-100 sm:items-center sm:pt-0">
    <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
      <a class="flex justify-center pt-8 sm:pt-0" href="https://nuxtjs.org" target="_blank">
        <svg width="218" height="45" viewBox="0 0 159 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M55.5017 6.81866H60.1727L70.0719 22.9912V6.81866H74.3837V29.7345H69.7446L59.8135 13.5955V29.7345H55.5017V6.81866Z" fill="#003543" />
        </svg>
      </a>
      <div class="mt-8 bg-white overflow-hidden shadow sm:rounded-lg p-6">
        <h2 class="text-2xl leading-7 font-semibold">
          Welcome to your Nuxt Application
        </h2>
        <p class="mt-3 text-gray-600">
          We recommend you take a look at the 
          <a href="https://nuxtjs.org" target="_blank" class="button--doc text-green-500 hover:underline">Nuxt Documentation</a>,
          whether you are new or have previous experience with the framework.<br>
        </p>
        <p class="mt-4 pt-4 text-gray-800 border-t border-dashed">
          To get started, remove <code class="bg-gray-100 text-sm p-1 rounded border">components/Tutorial.vue</code> and start coding in 
          <code class="bg-gray-100 text-sm p-1 rounded border">pages/index.vue</code>. Have fun!
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: "NuxtTutorial"
});
</script>

<style>
.nuxt-logo {
  height: 180px;
}
</style>
