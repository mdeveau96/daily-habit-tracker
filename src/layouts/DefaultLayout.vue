<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import TabSelector from '@/components/TabSelector.vue'
</script>

<template>
  <div class="layout">
    <AppHeader />
    <TabSelector />
    <main>
      <router-view />
    </main>
  </div>
</template>

<style scoped>
main {
  padding: 20px;
}
</style>
