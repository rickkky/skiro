<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as monaco from 'monaco-editor';

const editorElement = ref<HTMLDivElement | null>(null);
onMounted(() => {
  const editor = monaco.editor.create(editorElement.value!, {
    value: '# Hello World!',
    language: 'markdown',
    theme: 'vs-dark',
  });
});
</script>

<template>
  <div ref="editorElement" class="w-full h-full"></div>
</template>
