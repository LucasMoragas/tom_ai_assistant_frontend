<template>
  <div class="message-card">
    <div class="user-message">
      <div class="avatar user">👤</div>
      <div class="content">
        <p class="text">{{ question }}</p>
      </div>
    </div>
    <div class="tom-message">
      <div class="avatar tom">🍅</div>
      <div class="content">
        <h3 class="tom-title">Tom - Seu Especialista em Tomate Cereja</h3>
        <div class="text markdown" v-html="formattedAnswer"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { marked } from 'marked';
import { computed } from 'vue';

const props = defineProps({
  question: String,
  answer: String,
});

const formattedAnswer = computed(() => {
  return marked(props.answer);
});
</script>

<style scoped>
.message-card {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  margin: 0.5rem 1rem;
}

.user-message,
.tom-message {
  display: flex;
  gap: 0.75rem;
  max-width: 80%;
}

.user-message {
  align-self: flex-end;
  flex-direction: row-reverse;
}

.tom-message {
  align-self: flex-start;
}

.avatar {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  flex-shrink: 0;
}

.avatar.user {
  background-color: #e3e3e3;
}

.avatar.tom {
  background-color: #ff6b6b;
  color: white;
}

.content {
  background-color: #f8f9fa;
  padding: 0.75rem 1rem;
  border-radius: 1rem;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.user-message .content {
  background-color: #8B0000;
  color: white;
}

.text {
  margin: 0;
  line-height: 1.5;
  font-size: 0.95rem;
}

.tom-message .text {
  color: #2d3436;
}

.user-message .text {
  color: white;
}

.tom-title {
  margin: 0 0 0.5rem 0;
  font-size: 0.9rem;
  color: #8B0000;
  font-weight: 600;
}

/* Estilos para o markdown */
.markdown {
  white-space: pre-wrap;
  word-wrap: break-word;
}

.markdown strong {
  font-weight: 600;
  color: #8B0000;
}

.markdown ul, .markdown ol {
  padding-left: 1.5rem;
  margin: 0.5rem 0;
}

.markdown li {
  margin: 0.25rem 0;
}

.markdown p {
  margin: 0.5rem 0;
}

.markdown h1, .markdown h2, .markdown h3, .markdown h4, .markdown h5, .markdown h6 {
  margin: 1rem 0 0.5rem 0;
  color: #8B0000;
}
</style>