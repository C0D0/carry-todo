<template>
    <div v-for="todo in store._todoList.results" :key="todo.id" class="list">
      <div class="item">
        <span :class="{ completed: todo.completed }">{{ todo.name }}</span>
        <a href="/show/{{ todo.id }}">
          <input type="checkbox" name="completed" v-model="todo.completed">
          <span @click="deleteTodo(todo.id)" class="x">&#10060;</span>
        </a>
      </div>
    </div>
  </template>
  
  <script lang="ts">
    import { useTodoListStore } from "../store/todoListStore";

    export default {
      data() {
        return {
          "store":useTodoListStore()
        };
      },
      mounted() {
        this.store._getTasks()
      },
      methods: {
        deleteTodo(itemID: number) {
          this.store._deleteTask(itemID);
        },
      },
    };
  </script>
  <style scoped>
    span {
      margin: 0 10px;
      cursor: pointer;
    }
    
    .completed {
      text-decoration: line-through;
    }
    
    .list {
      display: flex;
      justify-content: center;
    }
    
    .item {
      display: flex;
      font-size: 1.5em;
      justify-content: space-between;
      width: 80vw;
      padding: 5px;
    }
  </style>