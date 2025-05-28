<template>
  <div class="topbar">
    <div class="item">
      <span class="icon">🌡️</span>
      <span class="value">21°C</span>
    </div>
    <div class="item">
      <span class="icon">💧</span>
      <span class="value">85%</span>
    </div>
    <div class="item">
      <span class="icon">🌱</span>
      <span class="value">40%</span>
    </div>
  </div>
</template>

<script setup>
// Dados mockados fixos; mais tarde podem vir via props
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