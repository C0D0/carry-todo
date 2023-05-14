<template>
    <div v-for="todo in todos" :key="todo.id" class="list">
      <div class="item">
        <span :class="{ completed: todo.completed }">{{ formatName(todo.item, 20) }}</span>
        <div>
          <input type="checkbox" name="completed" v-model="todo.completed">
          <span class="x">&#10060;</span>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  /*
  import { defineComponent } from "vue";
  import { useTodoListStore } from "../store/useTodoListStore";
  import { storeToRefs } from "pinia";
  */

  import api from '../api';

  export default {
    data() {
      return {
        todos: [] as TodoItem[],
      };
    },
    mounted() {
      this.fetchTodos();
    },
    methods: {
      fetchTodos() {
        api.get('/todos')
          .then((response) => {
            this.todos = response.data.todoList as TodoItem[];
          })
          .catch((error) => {
            console.error('Error fetching todos:', error);
          });
      },
      formatName(itemName:string, length:number) {
        if(itemName.length > length) {
          itemName = [...itemName].slice(0, length).join("") + "..."
        }
        return itemName;
      }
    },
  };

  interface TodoItem {
    "id":number,
    "item":string,
    "completed":boolean
  }
    /*
    export default defineComponent({
    setup() {
      const store = useTodoListStore();
  
      const { todoList } = storeToRefs(store);
      const { toggleCompleted, deleteTodo } = store;
      return { todoList, toggleCompleted, deleteTodo };
    },
  });
    */
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