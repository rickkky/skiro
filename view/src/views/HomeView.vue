<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
  <div>
    <header class="flex justify-between items-center p-1 border-b">
      <img
        class="w-10 h-10"
        src="https://vuejs.org/images/logo.png"
        alt="logo"
      />
      <nav>
        <RouterLink class="mr-2 last:mr-0 text-gray-800" to="/">
          Home
        </RouterLink>
        <RouterLink class="mr-2 last:mr-0 text-gray-800" to="/edit">
          Edit
        </RouterLink>
        <RouterLink class="mr-2 last:mr-0 text-gray-800" to="/about">
          About
        </RouterLink>
      </nav>
    </header>
  </div>
</template>
