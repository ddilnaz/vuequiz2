<template>
    <div class="user-card" @click="$emit('click')">
      <h2>{{ user.name }}</h2>
      <p>{{ user.email }}</p>
      <slot></slot> <!-- Slot for custom content -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserCard',
    props: {
      user: Object,
    },
  };
  </script>
  
 
  
  <style scoped>
  .user-card {
    border: 1px solid #ddd;
    border-radius: 8px;
    background: white;
    padding: 16px;
    margin: 8px;
    cursor: pointer;
    transition: box-shadow 0.3s ease;
    box-shadow: 0 2px 5px rgba(217, 140, 190, 0.1);
    background-color: rgb(173, 103, 227);
    text-align: center;
    text-shadow: #ddd;
  }
  
  .user-card:hover {
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  
  .user-info {
    text-align: center;
  }
  </style>
  