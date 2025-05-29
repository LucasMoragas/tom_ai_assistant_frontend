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
import { chatService } from '../services/chatService'

const messages = ref([]);
const loading = ref(false);

async function onAsk(text) {
  try {
    loading.value = true;
    // Adiciona a pergunta imediatamente
    messages.value.unshift({ 
      question: text, 
      answer: 'Processando...' 
    });

    // Envia para o backend
    const response = await chatService.sendMessage(text);
    
    // Atualiza a resposta
    messages.value[0].answer = response.message;
  } catch (error) {
    console.error('Error:', error);
    messages.value[0].answer = 'Desculpe, ocorreu um erro ao processar sua pergunta.';
  } finally {
    loading.value = false;
  }
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
  