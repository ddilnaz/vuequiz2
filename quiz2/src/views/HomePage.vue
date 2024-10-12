<template>
  <div class="container">
    <h1 class="title">User List</h1>
    <div class="user-grid">
      <div v-for="user in users" :key="user.id" class="user-card" @click="handleUserClick(user.id)">
        <UserCard :user="user" />
      </div>
    </div>
  </div>
</template>

<script>
import UserCard from '../components/UserCard.vue';

export default {
  name: 'HomePage',
  components: {
    UserCard,
  },
  data() {
    return {
      users: [],
    };
  },
  created() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        this.users = data;
      });
  },
  methods: {
    handleUserClick(id) {
      this.$router.push(`/user/${id}`);
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f0f4f8; 
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 40px;
  color: #2c3e50; 
  text-transform: uppercase; 
  letter-spacing: 1px; 
}

.user-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
}

.user-card {
  padding: 20px;
  background: linear-gradient(135deg, #6dd5ed 0%, #2193b0 100%); 
  border-radius: 15px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.user-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
}

.user-card h2 {
  font-size: 1.6rem;
  margin-bottom: 10px;
  color: #ffffff; 
}

.user-card p {
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9); 
}
</style>
