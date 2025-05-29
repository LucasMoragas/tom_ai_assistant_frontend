<template>
  <div class="topbar">
    <div class="item">
      <span class="icon">🌡️</span>
      <span class="value">{{ temperature }}°C</span>
    </div>
    <div class="item">
      <span class="icon">💧</span>
      <span class="value">{{ humidity }}%</span>
    </div>
    <div class="item">
      <span class="icon">🌱</span>
      <span class="value">{{ soilHumidity }}%</span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { weatherService } from '../services/weatherService';

const temperature = ref('--');
const humidity = ref('--');
const soilHumidity = ref('--');
let updateInterval;

async function updateWeatherData() {
  try {
    const data = await weatherService.getWeatherData();
    temperature.value = Math.round(data.current_weather.temperature);
    humidity.value = Math.round(data.current_weather.humidity);
    // Simulando umidade do solo baseado na umidade do ar e precipitação
    soilHumidity.value = Math.round(
      (data.current_weather.humidity + data.current_weather.precipitation * 10) / 2
    );
  } catch (error) {
    console.error('Error updating weather data:', error);
  }
}

onMounted(() => {
  // Atualiza imediatamente
  updateWeatherData();
  // Atualiza a cada 5 minutos
  updateInterval = setInterval(updateWeatherData, 5 * 60 * 1000);
});

onUnmounted(() => {
  if (updateInterval) {
    clearInterval(updateInterval);
  }
});
</script>

<style scoped>
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
  color: #333;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
.item {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.icon {
  font-size: 1.5rem;
}
.value {
  font-weight: 500;
}
</style>