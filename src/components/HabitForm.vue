<script lang="ts" setup>

  import { ref } from 'vue'

  const habitTitle = ref('')
  const goalType = ref('')

</script>

<template>
  <v-card class="mx-auto mb-4 rounded-lg" max-width="400" color="card_bg">
    <div class="form-container">
      <v-form @submit.prevent>
        <v-text-field v-model="habitTitle" :counter="100" label="Habit" required></v-text-field>
        <v-select v-model="goalType" label="Goal Type" :items="['daily', 'weekly', 'monthly', 'yearly']"></v-select>
      </v-form>
    </div>
    <v-card-actions>
      <v-btn variant="elevated" color="primary" width="100%"
        @click="$emit('submit', { title: habitTitle, type: goalType })">
        Add Habit
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
  .form-container {
    padding: 0.5rem;
  }
</style>