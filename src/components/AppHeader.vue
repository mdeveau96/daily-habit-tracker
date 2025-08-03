<template>
  <div class="header">
    <a class="title" href="/"><h1>Daily Habit Tracker</h1></a>
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
  padding: 1rem;
}
.title {
  text-decoration: none;
  font-weight: bold;
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
  text-decoration: none;
}
.header nav a:hover {
  text-decoration: underline;
}
</style>