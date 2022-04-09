<script setup lang="ts">
import SplitedEditor from '@/components/SplitedEditor.vue';
</script>

<template>
  <div class="flex flex-col w-full h-full">
    <div class="flex items-center flex-none h-12 ml-1">
      <button
        class="flex items-center justify-center h-10 w-10 rounded-full hover:outline-none hover:bg-gray-200"
        @click="$emit('toggle-menu')"
      >
        <svg
          class="h-6 w-6 text-gray-600"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </button>
    </div>
    <SplitedEditor class="flex-auto" />
  </div>
</template>
