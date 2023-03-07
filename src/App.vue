<template>
 <div>
    <router-view></router-view>
  </div>
</template>

<script setup>
// import { ref } from "vue";
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.card-details {
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 8px 32px 0 rgb(31 38 135 / 37%);
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border-radius: 10px;
    border: 4px solid rgba( 60, 64, 148, 0.18 );
    width: 75%;
    display: flex;
    padding-left: 16px;
}
tr.selected {
    background-color: #d0433c;
}
.main-tr{
    background-color: #e4dfde;
}
#users-table.card-details-shown {
    opacity: 0.5;
}
.upper{
    text-transform: uppercase;
}
::marker{
  color: transparent;
}
.table-hover tbody tr:hover td, .table-hover tbody tr:hover th {
  background-color: #e59f9b;
}
</style>
