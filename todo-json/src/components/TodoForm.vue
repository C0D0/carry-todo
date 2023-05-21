<template>
    <div>
      <form @submit.prevent="addItemAndClear(todo)">
        <input v-model="todo" type="text" /><button>Ajouter</button>
        <div class="alert-div">
          <div v-show="store._showAlert" class="alert">
            Please type something...
          </div>
        </div>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { ref, defineComponent } from "vue";
  import { useTodoListStore } from "../store/todoListStore";

  export default defineComponent({
    setup() {
      const todo = ref("");
      const store = useTodoListStore();
  
      function addItemAndClear(name: string) {
        if (name.length === 0) {
          store._inputAlert();
          return;
        }
        store._addTaskWithName(name);
        todo.value = "";
      }
  
      return { todo, addItemAndClear, store };
    },
  });
  </script>
  
  <style scoped>
  form {
    margin-bottom: 15px;
  }
  
  input {
    margin-top: 50px;
    margin-bottom: 15px;
    height: 20px;
    width: 50%;
  }
  input[type="text"] {
    border: solid 1px var(--main-color);
    border-radius: 1rem;
    width: 12rem;
    height: 2rem;
    padding: 0.5rem;
  }

  button {
    margin-left: 30px;
    background-color: var(--main-color);
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 5px;
    font-weight: 800;
    color: white;
  }
  
  .alert-div {
    min-height: 25px
  }
  
  .alert {
    color: #d1495b;
    font-size: 1em;
    font-weight: 600;
  }
  </style>