<script setup lang="ts">
  import { defineProps } from 'vue'

  defineProps<{
    habit: {
      title: string
      type: string
    }
  }>()
</script>

<template>
  <v-card class="mx-auto mb-4 rounded-lg" max-width="400" color="card_bg">
    <v-card-title>{{ habit.title }}</v-card-title>

    <v-card-subtitle class="pt-4">
      {{ habit.type }}
    </v-card-subtitle>

    <v-card-actions>
      <v-btn variant="elevated" color="primary" text="Edit Habit" @click="$emit('edit')"></v-btn>
      <v-btn variant="elevated" color="accent" text="Complete"></v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
  .v-card-actions {
    display: flex;
    gap: 8px;
  }

  .v-card-actions .v-btn {
    flex: 1;
    width: 100%;
  }
</style>