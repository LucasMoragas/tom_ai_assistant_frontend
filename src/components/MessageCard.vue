<template>
  <div class="message-card">
    <p class="question">Pergunta: {{ question }}</p>
    <p class="answer">Resposta: {{ answer }}</p>
  </div>
</template>

<script setup>
const props = defineProps({
  question: String,
  answer: String,
});
</script>

<style scoped>
.message-card {
  background-color: #fff;
  border-left: 4px solid #8B0000;
  border-radius: 0.5rem;
  padding: 1rem;
  margin: 0.5rem 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}
.question,
.answer {
  margin: 0.5rem 0;
  color: #333;
}
.question {
  font-weight: 600;
}
</style>