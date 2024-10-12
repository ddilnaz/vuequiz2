<template>
  <div class="user-details">
    <h1>User Details</h1>
    <h2>{{ user.name }}</h2>
    <p>Email: {{ user.email }}</p>
    <input v-model="userName" placeholder="Edit Name" class="name-input" />
    <button @click="updateUserName" class="update-button">Update</button>
  </div>
</template>

<script>
export default {
  name: 'UserDetails',
  data() {
    return {
      user: {},
      userName: '', 
    };
  },
  created() {
    const userId = this.$route.params.id;
 
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((response) => response.json())
      .then((data) => {
        this.user = data;
        this.userName = data.name;
      });
  },
  methods: {
    updateUserName() {
      if (this.userName.trim() === '') {
        alert("Name can't be empty");
        return;
      }
      this.user.name = this.userName;
      console.log('Updated user name:', this.user.name);
      alert('User name updated!');
    },
  },
};
</script>

<style scoped>
.user-details {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.name-input {
  width: 100%;
  padding: 10px;
  border-radius: 4px;
  border: 1px solid #ccc;
  margin: 10px 0;
}

.update-button {
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.update-button:hover {
  background-color: #0056b3;
}
</style>