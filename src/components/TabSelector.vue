<script lang="ts" setup>
  import { shallowRef } from 'vue'

  const selectedTab = shallowRef('/habits')
  const tabs = [
    { title: 'Habits', value: '/habits' },
    { title: 'Progress', value: '/progress' },
    { title: 'About', value: '/about' },
    { title: 'Settings', value: '/settings' }
  ]
</script>

<template>
  <v-tabs align-tabs="center" color="accent" v-model="selectedTab" :items="tabs" slider-color="accent">
    <template v-slot:tab="{ item }">
      <v-tab :to="item.value">{{ item.title }}</v-tab>
    </template>

  </v-tabs>
</template>