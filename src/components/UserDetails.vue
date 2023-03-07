<template>
  <div v-if="user.id">
    <p>{{ user.name }}</p>
    <p>{{ user.username }}</p>
    <p>ID: {{ user.id }}</p>
    <p>Email: {{ user.email }}</p>
    <p>Phone: {{ user.phone }}</p>
    <p>WebSite: {{ user.website }}</p>
    <p>Empresa: {{ user.company ? user.company.name : "Nenhuma" }}</p>
    <h4>{{ user.username }}'s Todo List:</h4>
    <ul>
      <li v-for="todo in todos" :key="todo.id">{{ todo.title }}</li>
    </ul>
    <td class="text-center">
      <router-link :to="{ name: 'edit-user', params: { id: user.id } }">
        <button
          class="btn btn-secondary ms-4"
        >
          Edit
        </button>
      </router-link>
    </td>
    <td class="text-center">
      <router-link :to="{ name: 'users-list' }">
        <button
          class="btn btn-secondary ms-4"
          @click="$emit('toggleView')"
        >
          Back
        </button>
      </router-link>
    </td>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from 'vue-router'
import { inject } from 'vue';

const store = inject('store'); 
const user = ref({});
const todos = ref({});
const route = useRoute()

onMounted(() => {
    const users = store.state.users;
    user.value = users.find(u => u.id === Number(route.params.id))
    fetchTodos();
})

const fetchTodos = async () => {
    const data  = await fetch(`https://jsonplaceholder.typicode.com/users/${user.value.id}/todos`);
    todos.value = await data.json();
};

</script>
<style>
  .m-buttons{
    margin-left: 0px;
    position: relative;
    display: block;
  }
</style>