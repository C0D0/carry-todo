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
    width: 600px;
  }

  h1 {
    text-transform: uppercase;
    Font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
    color: rgb(0, 217, 255);
    margin-top:50px;
  }
  </style>