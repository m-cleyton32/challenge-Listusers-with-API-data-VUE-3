<template>
  <table id="users-table" class="table table-bordered table-hover">
    <thead>
      <tr class="main-tr centered">
        <th class="text-center">Id</th>
        <th class="text-center">Avatar</th>
        <th class="text-center">Nome de Usuário</th>
        <th class="text-center">Email</th>
        <th class="text-center">Cidade</th>
        <th class="text-center">Tem Companhia?</th>
        <th class="text-center">Details</th>
        <th class="text-center">Action</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="user in users"
        :key="user.id"
        @click="toggleSelection($event.target)"
      >
        <td style="text-align: center">{{ user.id }}</td>
        <td style="text-align: center">
          <img :src="user.avatar" height="50" />
        </td>
        <td style="text-align: center">
          {{ user.username }}
        </td>
        <td style="text-align: center">{{ user.email }}</td>
        <td style="text-align: center">{{ user.address.city }}</td>
        <td style="text-align: center">
          {{ user.company ? "Yes" : "No" }}
        </td>
        <td style="text-align: center" id="details">
          <router-link :to="{ name: 'user-details', params: { id: user.id } }">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-three-dots"
              viewBox="0 0 16 16"
            >
              <path
                d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"
              />
            </svg>
          </router-link>
        </td>
        <td class="text-center">
          <button
            class="btn btn-danger delete-btn"
            @click="deleteUser(user.id)"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { inject } from "vue";

const users = ref([]);
const store = inject("store");

onMounted(() => {
  if (store.state.firstLoad) {
    console.log('fetching')
    store.dispatch("fetchUsers").then(() => {
      users.value = store.state.users;
      console.log(`fetching users ${users.value}`);
    });
    store.state.firstLoad = false;
  } else {
    users.value = store.state.users;
  }
});

const toggleSelection = (elem) => {
  if (!elem.parentNode.classList.contains("active")) {
    Array.from(elem.parentNode.parentNode.children).forEach((item) => {
      item.classList.remove("active");
    });
  }
  elem.parentNode.classList.toggle("active");
};

const deleteUser = (id) => {
  users.value = users.value.filter((user) => user.id !== id);
  store.commit("setUsers", users.value);
};
</script>


<style>
tr.active {
  background-color: #d0433c;
}
</style>