<script lang="ts" setup>

  import { ref } from 'vue'

  const habitTitle = ref('')
  const goalType = ref('')

</script>

<template>
  <v-form >
    <v-container width="75%">
      <v-text-field v-model="habitTitle" :counter="100" label="Habit" required></v-text-field>
      <v-select v-model="goalType" label="Goal Type" :items="['daily', 'weekly', 'monthly', 'yearly']"></v-select>
    </v-container>
  </v-form>
</template>
