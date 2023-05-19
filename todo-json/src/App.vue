<template>
  <div class="todo-app">
    <h1>To Do List</h1>
    <todo-form />
    <todo-list />
  </div>
</template>
<script setup>
import TodoForm from "./components/TodoForm.vue";
import TodoList from "./components/TodoList.vue";

const app = {
  components: {
    TodoList,
    TodoForm
  }
}
</script>
<script lang="ts">
</script>
<style>
* {
  margin: 0;
  padding: 0;
}

#app {
  background-color: #597d9a;
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.todo-app {
  padding: 5vh;
  min-height: 100vh;
  width: 30vw;
  background-color: #f7f9fc;
}
</style>