<!-- <template>
  <div>
    <h1>User List</h1>
    <div v-for="user in users" :key="user.id">
      <UserCard :user="user" @click="handleUserClick(user.id)" />
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
    // Fetch user data from API
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
</script> -->
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
  background-color: #f9f9f9;
}

.title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #333;
}

.user-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}

.user-card {
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
  background-color: aquamarine;
}

.user-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.user-card h2 {
  font-size: 1.5rem;
  color: #333;
}

.user-card p {
  font-size: 1rem;
  color: #666;
}
</style>
