<script setup lang="ts">
import AppHeader from '@/components/AppHeader.vue'
import SideBar from '@/components/SideBar.vue'
</script>

<template>
  <div class="layout">
    <AppHeader />
    <main>
      <SideBar />
      <div class="content">
        <router-view />
      </div>
    </main>
    <footer>
      <p>&copy; 2025 Daily Habit Tracker</p>
    </footer>
  </div>
</template>
