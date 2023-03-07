<template>
  <form class="w-50 mx-auto">
    <div class="form-group">
      <label for="name">Name:</label>
      <input type="text" class="form-control bold" id="name" v-model="user.name" />
    </div>
    <div class="form-group">
      <label for="userName">Username:</label>
      <input
        type="text"
        class="form-control bold"
        id="userName"
        v-model="user.username"
      />
    </div>

    <div class="form-group">
      <label for="Adress">Adress:</label>
      <input
        type="text"
        class="form-control bold"
        id="adress"
        v-model="user.adress"
      />
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input
        type="email"
        class="form-control bold"
        id="email"
        v-model="user.email"
      />
    </div>

    <div class="form-group">
      <label for="Phone">Phone:</label>
      <input type="text" class="form-control bold" id="phone" v-model="user.phone" />
    </div>

    <div class="form-group">
      <label for="website">Website:</label>
      <input
        type="text"
        class="form-control bold"
        id="website"
        v-model="user.website"
      />
    </div>
    <td class="w-100 m-buttons">
      <router-link :to="{ name: 'users-list' }">
        <button
          class="btn btn-secondary ms-4 mt-5"
          @click="$emit('toggleView')"
        >
          Back
        </button>
        <button
          type="button"
          class="btn btn-primary mt-5 ms-4"
          @click="saveUser"
        >
          Save
        </button>
      </router-link>
    </td>
  </form>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { inject } from "vue";

const store = inject("store");
const route = useRoute();
const user = ref({});

const saveUser = () => {
  fetch(`https://jsonplaceholder.typicode.com/posts/${user.value.id}`, {
    method: "PUT",
    body: JSON.stringify(user.value),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then(() => {
      store.commit('updateUser', { id: user.value.id, user: user.value })
      route.push({ path: "/users-list" });
    });
  
};

onMounted(() => {
  const users = store.state.users;
  user.value = users.find((u) => u.id === Number(route.params.id));
});
</script>