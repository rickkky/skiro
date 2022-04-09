<script setup lang="ts">
import { ref, watch, onMounted } from 'vue';
import * as monaco from 'monaco-editor';
import MarkdownIt from 'markdown-it';

const markdownParser = new MarkdownIt();
const editorElement = ref<HTMLDivElement | null>(null);
let editor: monaco.editor.IStandaloneCodeEditor | null = null;
const text = ref('# Hello World');
const renderedText = ref('');

watch(
  text,
  (value) => {
    renderedText.value = markdownParser.render(value);
  },
  { immediate: true },
);

onMounted(() => {
  editor = monaco.editor.create(editorElement.value!, {
    value: text.value,
    language: 'markdown',
    theme: 'vs',
  });
  editor.onDidChangeModelContent(() => {
    text.value = editor!.getValue();
  });
});
</script>

<template>
  <div class="flex">
    <div ref="editorElement" class="w-1/2 h-full"></div>
    <div class="w-1/2 h-full pl-1 pr-1" v-html="renderedText"></div>
  </div>
</template>
