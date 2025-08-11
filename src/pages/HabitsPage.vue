<script setup lang="ts">
  import HabitCard from '@/components/HabitCard.vue';
  import HabitForm from '@/components/HabitForm.vue';
  import { onMounted, ref } from 'vue';
  import { db } from '@/firebase'
  import { collection, getDocs, addDoc } from 'firebase/firestore'

  const addNewHabit = ref(false)

  interface Habit {
    title: string
    type: string
    selectedRange?: Date[]
  }

  const isToday = (date: Date) => {
    const today = new Date()
    return (
      date.getFullYear() === today.getFullYear() &&
      date.getMonth() === today.getMonth() &&
      date.getDate() === today.getDate()
    )
  }

  const hasToday = (selectedRange: Date[]) =>
    selectedRange.some(date => isToday(date))

  const isTodayInRange = (selectedRange: Date[]) => {
    if (selectedRange.length < 2) return false
    const today = new Date()
    const start = selectedRange[0]
    const end = selectedRange[1]
    return today >= start && today <= end
  }

  const todayHabits = ref<Habit[]>([])
  const laterHabits = ref<Habit[]>([])

  const habitsCol = collection(db, 'habits')
  const fetchHabits = async () => {
    const habitsSnapshot = await getDocs(habitsCol)
    todayHabits.value = habitsSnapshot.docs
      .map(doc => doc.data() as Habit)
      .filter(habit =>
        habit.type === 'Daily' ||
        (habit.selectedRange && hasToday(habit.selectedRange)) ||
        (habit.selectedRange && isTodayInRange(habit.selectedRange))
      )
    laterHabits.value = habitsSnapshot.docs
      .map(doc => doc.data() as Habit)
      .filter(habit =>
        habit.type !== 'Daily' &&
        (!habit.selectedRange || !hasToday(habit.selectedRange)) &&
        (!habit.selectedRange || !isTodayInRange(habit.selectedRange))
      )
  }

  onMounted(fetchHabits)

  const addHabit = async (habit: Habit) => {
    console.log('Adding habit:', habit)
    await addDoc(habitsCol, habit)
    addNewHabit.value = false
    await fetchHabits()
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
      <v-col cols="12" sm="6" md="4" v-for="(habit, idx) in todayHabits" :key="idx">
        <HabitCard :habit="habit" />
      </v-col>
    </v-row>
    <p>Upcoming Habits</p>
    <v-row>
      <v-col cols="12" sm="6" md="4" v-for="(habit, idx) in laterHabits" :key="'upcoming-' + idx">
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