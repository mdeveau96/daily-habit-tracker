<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
// import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <div class="layout">
    <AppHeader />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
