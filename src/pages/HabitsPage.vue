<script setup lang="ts">
  import HabitCard from '@/components/HabitCard.vue';
  import HabitForm from '@/components/HabitForm.vue';
  import { ref } from 'vue';

  const addNewHabit = ref(false);

</script>

<template>
  <h2>Your Habits</h2>
  <v-divider />
  <div class="container">
    <v-dialog max-width="400" v-model="addNewHabit">
      <HabitForm v-if="addNewHabit" @cancel="addNewHabit = false" />
    </v-dialog>
    <HabitCard />
    <div class="text-center">
      <v-btn variant="elevated" text="Add New Habit" color="primary" @click="addNewHabit = !addNewHabit" />
    </div>
  </div>
</template>

<style>
  h2 {
    text-align: center;
    margin: 0;
    color: var(--text-color-muted);
  }

  .container {
    padding: 20px;
  }
</style>