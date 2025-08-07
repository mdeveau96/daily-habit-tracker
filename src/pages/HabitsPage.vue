<script setup lang="ts">
  import HabitCard from '@/components/HabitCard.vue';
  import HabitForm from '@/components/HabitForm.vue';
  import { ref } from 'vue';
  import { db } from '@/firebase'
  import { collection, getDocs } from 'firebase/firestore'

  const addNewHabit = ref(false);

  interface Habit {
    title: string;
    type: string;
  }

  const habitsCol = collection(db, 'habits')
  const habitsSnapshot = await getDocs(habitsCol)
  const habits: Habit[] = habitsSnapshot.docs.map(doc => doc.data() as Habit);

  const addHabit = async (habit: Habit) => {
    console.log('Adding habit:', habit);
    // await addDoc(habitsCol, habit);
    addNewHabit.value = false; // Close the form after adding
  };


</script>

<template>
  <h2>Your Habits</h2>
  <v-divider />
  <div class="container">
    <p>Today's Habits</p>
    <v-dialog max-width="400" v-model="addNewHabit">
      <HabitForm v-if="addNewHabit" @cancel="addNewHabit = false" @submit="addHabit" />
    </v-dialog>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(habit, idx) in habits" :key="idx">
        <HabitCard :habit="habit" />
      </v-col>
    </v-row>
    <p>Upcoming Habits</p>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(habit, idx) in habits" :key="'upcoming-' + idx">
        <HabitCard :habit="habit" />
      </v-col>
    </v-row>
    <footer class="new-habit">
      <v-btn variant="elevated" text="Add New Habit" color="primary" @click="addNewHabit = !addNewHabit" />
    </footer>
  </div>
</template>

<style>
  h2 {
    text-align: center;
    margin: 0;
    color: var(--text-color-muted);
  }

  p {
    text-align: center;
    margin: 0;
    color: var(--text-color-muted);
    margin: 15px 0;
  }

  .container {
    padding: 5px 20px;
    padding-bottom: 100px
  }

  .new-habit {
    width: 100%;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
    background: var(--background);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
    border-top-left-radius: 24px;
    border-top-right-radius: 24px;
    /* box-shadow: 0 -12px 24px rgba(0, 0, 0, 0.08); */
  }
</style>