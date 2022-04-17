<script setup lang="ts">
import { ref, toRefs, watch, onMounted } from 'vue';
import MarkdownIt from 'markdown-it';
import * as texmathPlugin from 'markdown-it-texmath';

const props = defineProps<{
  text: string;
}>();

const markdownIt = new MarkdownIt().use(texmathPlugin);
const { text } = toRefs(props);
const rendered = ref('');

watch(
  text,
  (value) => {
    rendered.value = markdownIt.render(value);
  },
  { immediate: true },
);
</script>

<template>
  <div class="markdown-body" v-html="rendered"></div>
</template>

<style>
@import 'github-markdown-css/github-markdown.css';
@import 'katex/dist/katex.min.css';
</style>
