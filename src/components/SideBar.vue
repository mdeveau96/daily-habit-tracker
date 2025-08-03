<template>
  <div class="sidebar">
    <ul>
      <li><router-link to="/habits">Habits</router-link></li>
      <li><router-link to="/progress">Your Progress</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/settings">Settings</router-link></li>
    </ul>
  </div>
</template>

<style scoped>
.sidebar {
  background: #f0f0f0;
  padding: 10px;
  max-width: 200px;
}
.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.sidebar li {
  margin: 10px 0;
}
.sidebar li a {
  color: #333;
  text-decoration: none;
}
.sidebar a:hover {
  color: #007bff;
}
.sidebar a:active {
  color: #0056b3;
}
</style>