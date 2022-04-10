<script setup lang="ts">
import { ref, onMounted } from 'vue';
import * as monaco from 'monaco-editor';
import { defineThemes, themes } from '@/utils/monaco-editor/themes';
import MarkdownDisplayer from './MarkdownDisplayer.vue';

const editorElement = ref<HTMLDivElement | null>(null);
let editor: monaco.editor.IStandaloneCodeEditor | null = null;
const text = ref('# Hello World\n\n$$\na=b+c\n$$');

defineThemes();

onMounted(() => {
  editor = monaco.editor.create(editorElement.value!, {
    value: text.value,
    language: 'markdown',
    theme: themes.light.id,
  });
  editor.onDidChangeModelContent(() => {
    text.value = editor!.getValue();
  });
});
</script>

<template>
  <div class="flex">
    <div ref="editorElement" class="w-1/2 h-full"></div>
    <MarkdownDisplayer class="w-1/2 h-full pl-3 pr-3" :text="text" />
  </div>
</template>
