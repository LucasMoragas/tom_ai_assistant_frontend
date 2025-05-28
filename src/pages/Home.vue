<template>
  <div class="home">
    <TopBar />
    <AssistantInput @ask="onAsk" />
    <div class="messages">
      <MessageCard
        v-for="(msg, idx) in messages"
        :key="idx"
        :question="msg.question"
        :answer="msg.answer"
      />
    </div>
  </div>
</template>
  
  <script setup>
  import { ref } from 'vue'
  import TopBar from '../components/TopBar.vue'
  import AssistantInput from '../components/AssistantInput.vue'
  import MessageCard from '../components/MessageCard.vue'
  
  // Lista de mensagens mockadas
const messages = ref([
  {
    question: 'Qual o melhor horário para irrigar os tomates?',
    answer:
      'O ideal é irrigar os tomates no início da manhã ou no final da tarde para evitar a evaporação excessiva e o surgimento de doenças.',
  },
]);

function onAsk(text) {
  messages.value.push({ question: text, answer: 'Resposta padrão do Tom.' });
}
</script>

<style>
body {
  margin: 0;
  background-color: #e5e5e5;
  color: #333;
  font-family: sans-serif;
}
.home {
  min-height: 100vh;
}
.messages { 
  display: flex;
  flex-direction: column-reverse;
  margin-top: 1rem;
  margin-bottom: 2rem;
}
</style>
  