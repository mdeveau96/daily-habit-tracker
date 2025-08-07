<script lang="ts" setup>

  import { ref } from 'vue'

  const habitTitle = ref('')
  const goalType = ref('Daily')
  const selectedRange = ref<Date[]>([])

</script>

<template>
  <v-card class="card-container" color="card_bg">
    <v-form @submit.prevent>
      <v-text-field v-model="habitTitle" variant="outlined" :counter="100" label="New Habit" required></v-text-field>
      <v-select v-model="goalType" variant="outlined" label="Goal Type"
        :items="['Daily', 'Weekly', 'Monthly', 'Annually', 'Custom']" :list-props="{ bgColor: 'card_bg' }"></v-select>
      <v-date-picker v-if="goalType == 'Custom'" v-model="selectedRange" label="Select a date range" multiple="range"
        class="mx-auto" bg-color="card_bg" text="text"></v-date-picker>
    </v-form>
    <v-card-actions>
      <v-btn variant="elevated" color="primary" width="100%"
        @click="$emit('submit', { title: habitTitle, type: goalType })">
        Add Habit
      </v-btn>
      <v-btn variant="elevated" color="red" width="100%" @click="$emit('cancel')">Cancel</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
  .card-container {
    padding: 0.5rem;
  }

  .v-card-actions {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    padding: 0;
  }
</style>