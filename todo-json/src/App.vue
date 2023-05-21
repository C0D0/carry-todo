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
:root{
  --text-color:rgb(54, 0, 54);  
  --main-color:purple;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 1rem;
  color: var(--text-color);
}

h1 {
  font-size: 2rem;
}

#app {
  display: flex;
  justify-content: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fcfcff;
}

.todo-app {
  height:100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding:3rem;
  max-width: 50vw;
  }
</style>