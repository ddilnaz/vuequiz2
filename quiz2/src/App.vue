<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>

#app {
  font-family: 'Roboto', sans-serif;
  text-align: center;
}

nav {
  margin: 20px 0;
}

nav a {
  margin: 0 15px;
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

nav a:hover {
  color: #0056b3;
}

</style>
