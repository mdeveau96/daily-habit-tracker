<template>
  <v-toolbar color="header_bg">
    <v-toolbar-title text="Daily Habit Tracker"></v-toolbar-title>

    <template v-slot:append>
      <v-btn variant="flat" color="primary" text="Login" href="/login" />
      <v-btn text="Sign Up" href="/signup" />
    </template>
  </v-toolbar>
</template>

<style scoped></style>