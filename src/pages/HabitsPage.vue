<script setup lang="ts">
  import HabitCard from '@/components/HabitCard.vue';
  // import HabitForm from '@/components/HabitForm.vue';

</script>

<template>
  <!-- <HabitForm/> -->
  <HabitCard />
  <div class="text-center">
    <v-btn variant="elevated" text="New Habit" color="primary"/>
  </div>
</template>