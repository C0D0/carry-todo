<template>
    <div class="todo-app">
      <h1>To Do List</h1>
      <todo-form />
      <todo-list />
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  import TodoForm from "./TodoForm.vue";
  import TodoList from "./TodoList.vue";
  export default defineComponent({
    components: { TodoForm, TodoList },
    setup() {
      return {};
    },
  });
  </script>
  <style scoped>
  .todo-app {
    padding: 5vh;
    min-height: 100vh;
    width: 400px;
    background-color: #f7f9fc;
  }
  h1 {
    text-transform: uppercase;
    text-decoration: underline;
  }
  </style>