<template>
  <div class="header">
    <h1><a href="/">Daily Habit Tracker</a></h1>
    <nav>
      <ul>
        <li><router-link to="/login">Login</router-link></li>
        <li><router-link to="/signup">Sign Up</router-link></li>
      </ul>
    </nav>
  </div>
</template>

<style scoped>
.header {
  background: #2c3e50;
  padding: 10px;
  color: white;
}
.header h1 {
  margin: 0;
  display: inline-block;
  font-size: 24px;
  text-decoration: none;
}
.header h1 a {
  color: white;
  text-decoration: none;
}
.header nav {
  float: right;
  margin: auto;
}
.header nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}
.header nav li {
  margin-left: 20px;
}
.header nav a {
  color: white;
  text-decoration: none;
}
.header nav a:hover {
  text-decoration: underline;
}
.header nav a:active {
  color: #0056b3;
}
</style>