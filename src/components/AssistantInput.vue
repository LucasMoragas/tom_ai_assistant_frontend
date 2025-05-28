<template>
  <div class="assistant-input">
    <input
      v-model="input"
      @keyup.enter="send"
      type="text"
      class="input"
      placeholder="Sou o Tom, seu especialista em tomate cereja. Qual é a sua dúvida?"
    />
    <button @click="send" class="btn">Enviar</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
const emit = defineEmits(['ask']);
const input = ref('');
function send() {
  if (!input.value.trim()) return;
  emit('ask', input.value.trim());
  input.value = '';
}
</script>

<style scoped>
.assistant-input {
  margin-top: 5rem;
  display: flex;
  gap: 1rem;
  padding: 1rem;
}
.input {
  flex: 1;
  border: 1px solid #ccc;
  border-radius: 0.5rem;
  padding: 0.75rem 1rem;
  background-color: #fafafa;
  color: #333;
}
.input:focus {
  outline: 2px solid #8B0000;
}
.btn {
  background-color: #8B0000;
  color: #fff;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
}
.btn:hover {
  background-color: #B22222;
}
</style>